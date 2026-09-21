import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const PRODUTOS_KFC = [
  { id: '1', nome: 'Balde Secreto 12 Pedaços', preco: 'R$ 69,90', desc: 'Frango com a receita secreta do coronel, crocante e suculento.', img: 'https://scontent.fcgh38-1.fna.fbcdn.net/v/t39.30808-6/461778937_3222835794518778_42718732968284917_n.png?stp=dst-jpg_tt6&cstp=mx800x800&ctp=s800x800&_nc_cat=107&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=JJ8jGwyS4BEQ7kNvwF4A9bY&_nc_oc=Ado5SWgcS3eCHFhzh_0-bRd2y6Loz1ku63thf-a60eQlIcugid7jbKax16-7TfPKjsE&_nc_zt=23&_nc_ht=scontent.fcgh38-1.fna&_nc_gid=NuSOzWa4jLS52kp-RYTWgQ&_nc_ss=7a289&oh=00_AQKJIXMTESuo6PAzWUd7m3yU_g1mBobbpPh5Ewi1EbEx1w&oe=6AB72D75' },
  { id: '2', nome: 'Kentucky Burger', preco: 'R$ 29,90', desc: 'Filé de frango empanado, maionese temperada, alface e molho.', img: 'https://scontent.fcgh38-1.fna.fbcdn.net/v/t39.30808-6/522804821_1059037879723716_4181795886972144215_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UZhcQvlVnP8Q7kNvwGY4GQM&_nc_oc=AdpEbEnvM1OlCEcA-rDVexiU05enFyguLMZpmKCNNvnd3Vc6TMmqEtvf8fStQ1MJ974&_nc_zt=23&_nc_ht=scontent.fcgh38-1.fna&_nc_gid=-41YMlyMGOLd8UFS-0MUxg&_nc_ss=7a289&oh=00_AQJhT8Xe-0fD8bFojbIxRS68RFdaxAO1rBYVt2ocAxZ2ag&oe=6AB71ADB' },
  { id: '3', nome: 'Batata Frita Média', preco: 'R$ 13,90', desc: 'Batatas sequinhas com toque de especiarias.', img: 'https://cdn.folhadealphaville.com.br/Folder/2025/12/91c3d827-e94d-4c8d-9391-bcdb75cb417a/conversions/b2ap3_medium_EXTKhCDX0AEAbq2-large.jpg' },
  { id: '4', nome: 'Minissundae Doce de Leite', preco: 'R$ 9,90', desc: 'Sorvete cremoso de baunilha com calda de doce de leite.', img: 'https://www.kfc.pt/wp-content/uploads/2026/06/minisundae-caramelo-1920x1080px.jpg' },
];

export default function KfcScreen() {
  const router = useRouter();
  const [busca, setBusca] = useState('');

  const produtosFiltrados = PRODUTOS_KFC.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Barra Superior / Voltar */}
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>‹ Voltar</Text>
          </TouchableOpacity>
        </View>

        {/* Capa e Informações da Loja */}
        <View style={styles.storeHeader}>
          <View style={styles.storeImageContainer}>
            <Image source={{ uri: 'https://i.imgur.com/sZ1Jye3.png' }} style={styles.storeLogo} resizeMode="cover" />
          </View>
          <Text style={styles.storeName}>KFC</Text>
          <Text style={styles.storeMeta}>★ 4.8 • Lanches • 1.2 km</Text>
          <Text style={styles.storeDelivery}>30-40 min • Grátis</Text>
        </View>

        {/* Busca Interna */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar em KFC"
            placeholderTextColor="#64748B"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        {/* Secção Destaques */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Baldes e Combos</Text>
        </View>

        <View style={styles.productList}>
          {produtosFiltrados.map((item) => (
            <TouchableOpacity key={item.id} style={styles.productCard}>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.nome}</Text>
                <Text style={styles.productDesc} numberOfLines={2}>{item.desc}</Text>
                <Text style={styles.productPrice}>{item.preco}</Text>
              </View>
              <View style={styles.productImageContainer}>
                <Image source={{ uri: item.img }} style={styles.productImage} resizeMode="cover" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContent: { paddingBottom: 30 },
  headerBar: { paddingHorizontal: 18, paddingTop: 12, paddingBottom: 8 },
  backText: { fontSize: 22, fontWeight: '700', color: '#EA1D2C' },
  storeHeader: { alignItems: 'center', paddingHorizontal: 18, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
  storeImageContainer: { width: 84, height: 84, borderRadius: 42, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E2E8F0', overflow: 'hidden', alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  storeLogo: { width: '100%', height: '100%' },
  storeName: { fontSize: 20, fontWeight: '800', color: '#111827', marginBottom: 4 },
  storeMeta: { fontSize: 13, color: '#475569', marginBottom: 2 },
  storeDelivery: { fontSize: 12, color: '#16A34A', fontWeight: '600' },
  searchContainer: { height: 48, marginHorizontal: 18, marginVertical: 15, borderRadius: 12, backgroundColor: '#F1F5F9', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  searchIcon: { fontSize: 18, marginRight: 9 },
  searchInput: { flex: 1, height: '100%', fontSize: 15, color: '#111827' },
  sectionHeader: { paddingHorizontal: 18, marginTop: 15, marginBottom: 12 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },
  productList: { paddingHorizontal: 18, gap: 14 },
  productCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  productInfo: { flex: 1, paddingRight: 12 },
  productName: { fontSize: 15, fontWeight: '700', color: '#111827', marginBottom: 4 },
  productDesc: { fontSize: 12, color: '#64748B', marginBottom: 6 },
  productPrice: { fontSize: 14, fontWeight: '700', color: '#16A34A' },
  productImageContainer: { width: 78, height: 78, borderRadius: 12, backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#E2E8F0', overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  productImage: { width: '100%', height: '100%' },
  bottomSpace: { height: 20 },
});