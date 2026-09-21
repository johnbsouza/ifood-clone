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

const PRODUTOS_MC = [
  {
    id: '1',
    nome: 'Big Mac (Sanduíche)',
    preco: 'R$ 34,90',
    desc: 'Dois hambúrgueres, alface, queijo, molho especial, cebola e picles.',
    img: 'https://vejasp.abril.com.br/wp-content/uploads/2016/11/big-mac_ok.jpeg?quality=70&w=575&h=360&crop=1',
  },
  {
    id: '2',
    nome: 'Quarterão com Queijo',
    preco: 'R$ 36,90',
    desc: 'Hambúrguer de carne 100% bovina, queijo cheddar, picles e ketchup.',
    img: 'https://classic.exame.com/wp-content/uploads/2017/08/20526026_1525950374110174_3184625081375027309_n.jpg?ims=750x/filters:quality(85):format(webp)',
  },
  {
    id: '3',
    nome: 'McOferta Média Big Mac',
    preco: 'R$ 44,90',
    desc: 'Acompanha batata média crocante e bebida refil gelada.',
    img: 'https://scontent.fcgh38-1.fna.fbcdn.net/v/t1.6435-9/36672370_1922126387825902_8519009263010447360_n.jpg?stp=dst-jpg_tt6&cstp=mx800x800&ctp=s800x800&_nc_cat=101&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=s_6i-mThLzsQ7kNvwFDxPFJ&_nc_oc=AdonJarC__jQwVx7JcUKwOjTAZe99NfsRMG7dST8SYGqo1ZR2ffyvZZ6n9FWDuOEPxc&_nc_zt=23&_nc_ht=scontent.fcgh38-1.fna&_nc_gid=MPjM-UNHoEamPloP2rsJFQ&_nc_ss=7a289&oh=00_AQLdJiUvW6tP2V27VoJo8Vav_Qf-LXWAY9Q0p5g9TXgarw&oe=6AD8A6E4',
  },
  {
    id: '4',
    nome: 'McFlurry Oreo',
    preco: 'R$ 13,90',
    desc: 'Mix de baunilha com cobertura de chocolate e biscoito Oreo.',
    img: 'https://scontent.fcgh38-1.fna.fbcdn.net/v/t39.30808-6/464397395_8856671144371357_3292161014221417082_n.png?stp=dst-jpg_tt6&cstp=mx800x800&ctp=s800x800&_nc_cat=107&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=yi6I-5hXgs8Q7kNvwEDR3-v&_nc_oc=AdoGfRk3uiBvbLOLbmj4zkWsOGJlHkp3GSsWrF5FDcy22me5QS8-QSUq2synXUPizZ4&_nc_zt=23&_nc_ht=scontent.fcgh38-1.fna&_nc_gid=C56mBUSWg-5XNY9RJg3E3g&_nc_ss=7a289&oh=00_AQJHm724wP23_X31w061HBdstFu9UZ4WoTSCAI1SkAJ9MQ&oe=6AB71ED3',
  },
];

export default function McDonaldsScreen() {
  const router = useRouter();

  const [busca, setBusca] = useState('');

  const produtosFiltrados = PRODUTOS_MC.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Barra Superior / Voltar */}
        <View style={styles.headerBar}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>‹ Voltar</Text>
          </TouchableOpacity>
        </View>

        {/* Capa e Informações da Loja */}
        <View style={styles.storeHeader}>
          <View style={styles.storeImageContainer}>
            <Image
              source={{
                uri: 'https://i.imgur.com/su4iB3p.png',
              }}
              style={styles.storeLogo}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.storeName}>McDonald's</Text>

          <Text style={styles.storeMeta}>
            ★ 4.7 • Lanches • 2.5 km
          </Text>

          <Text style={styles.storeDelivery}>
            25-35 min • R$ 4,99 frete
          </Text>
        </View>

        {/* Busca Interna */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar em McDonald's"
            placeholderTextColor="#64748B"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        {/* Seção Destaques */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mais Pedidos</Text>
        </View>

        {/* Produtos */}
        <View style={styles.productList}>
          {produtosFiltrados.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.productCard}
              activeOpacity={0.8}
            >
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.nome}</Text>

                <Text
                  style={styles.productDesc}
                  numberOfLines={2}
                >
                  {item.desc}
                </Text>

                <Text style={styles.productPrice}>{item.preco}</Text>
              </View>

              <View style={styles.productImageContainer}>
                <Image
                  source={{ uri: item.img }}
                  style={styles.productImage}
                  resizeMode="cover"
                />
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  headerBar: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 8,
  },

  backButton: {
    alignSelf: 'flex-start',
  },

  backText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#EA1D2C',
  },

  storeHeader: {
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },

  storeImageContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#E2E8F0',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  storeLogo: {
    width: 84,
    height: 84,
  },

  storeName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },

  storeMeta: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 2,
  },

  storeDelivery: {
    fontSize: 12,
    color: '#64748B',
  },

  searchContainer: {
    height: 48,
    marginHorizontal: 18,
    marginVertical: 15,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 9,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#111827',
  },

  sectionHeader: {
    paddingHorizontal: 18,
    marginTop: 15,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },

  productList: {
    paddingHorizontal: 18,
    gap: 14,
  },

  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },

  productInfo: {
    flex: 1,
    paddingRight: 12,
  },

  productName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },

  productDesc: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 6,
  },

  productPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#16A34A',
  },

  productImageContainer: {
    width: 78,
    height: 78,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  productImage: {
    width: 78,
    height: 78,
  },

  bottomSpace: {
    height: 20,
  },
});