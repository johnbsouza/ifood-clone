import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const CATEGORIAS = [
  { id: '1', titulo: 'Restaurantes', icone: 'restaurant' },
  { id: '2', titulo: 'Mercados', icone: 'shopping-cart' },
  { id: '3', titulo: 'Clube iFood', icone: 'local-offer' },
  { id: '4', titulo: 'Farmácias', icone: 'local-pharmacy' },
  { id: '5', titulo: 'Pet shops', icone: 'pets' },
  { id: '6', titulo: 'Express', icone: 'flash-on' },
  { id: '7', titulo: 'Bebidas', icone: 'local-bar' },
  { id: '8', titulo: 'Shopping', icone: 'card-giftcard' },
];

// URLs Online diretas e ativas de comida e banners
const BANNERS = [
  { 
    id: '1', 
    cor: '#006039', 
    titulo: 'bora pedir de novo?', 
    destaque: 'peça por R$ 0,99', 
    img: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' 
  },
  { 
    id: '2', 
    cor: '#EA1D2C', 
    titulo: 'fome dequê?', 
    destaque: 'até 50% OFF', 
    img: 'https://res.cloudinary.com/demo/image/upload/v1652345767/docs/burguer.jpg' 
  },
];

const PROMOCOES = [
  { 
    id: '1', 
    nome: '50 Uni. Mini Salgados Fritos...', 
    precoAtual: 'R$ 12,99', 
    precoAntigo: 'R$ 39,99', 
    tempo: '42-52 min', 
    frete: 'Grátis', 
    img: 'https://res.cloudinary.com/demo/image/upload/v1652345767/docs/snack.jpg' 
  },
  { 
    id: '2', 
    nome: 'X Burguer Duplo com Bacon', 
    precoAtual: 'R$ 14,99', 
    precoAntigo: 'R$ 29,99', 
    tempo: '30-40 min', 
    frete: 'Grátis', 
    img: 'https://res.cloudinary.com/demo/image/upload/v1652345767/docs/burguer.jpg' 
  },
];

// URLs Online diretas dos Logos das marcas em HD
const FAMOSOS = [
  { 
    id: '1', 
    nome: 'KFC', 
    img: 'https://upload.wikimedia.org/wikipedia/sco/0/03/KFC_logo.svg' 
  },
  { 
    id: '2', 
    nome: 'McDonald\'s', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg' 
  },
  { 
    id: '3', 
    nome: 'Outback', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Outback_Steakhouse_Logo.svg' 
  },
  { 
    id: '4', 
    nome: 'Sushi Dev', 
    img: 'https://res.cloudinary.com/demo/image/upload/v1652345767/docs/sushi.jpg' 
  },
  { 
    id: '5', 
    nome: 'Burguer', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Burger_King_logo_%281999%E2%80%932020%29.svg' 
  },
];

const RESTAURANTES = [
  { 
    id: '1', 
    nome: 'Habib\'s - Paulista', 
    nota: '4.7', 
    categoria: 'Lanches', 
    distancia: '1.2 km', 
    tempo: '30-40 min', 
    frete: 'Grátis', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Habib%27s_logo.svg' 
  },
  { 
    id: '2', 
    nome: 'McDonald\'s', 
    nota: '4.8', 
    categoria: 'Lanches', 
    distancia: '2.5 km', 
    tempo: '25-35 min', 
    frete: 'R$ 4,99', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg' 
  },
  { 
    id: '3', 
    nome: 'Pizzaria Margherita', 
    nota: '4.9', 
    categoria: 'Pizza', 
    distancia: '3.1 km', 
    tempo: '45-55 min', 
    frete: 'R$ 7,90', 
    img: 'https://res.cloudinary.com/demo/image/upload/v1652345767/docs/pizza.jpg' 
  },
  { 
    id: '4', 
    nome: 'Sushi do Zé', 
    nota: '4.6', 
    categoria: 'Japonesa', 
    distancia: '1.8 km', 
    tempo: '40-50 min', 
    frete: 'Grátis', 
    img: 'https://res.cloudinary.com/demo/image/upload/v1652345767/docs/sushi.jpg' 
  },
];

export default function App() {
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

  return (
    <SafeAreaView style={[styles.container, { paddingTop }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.addressText}>R. Antônio Miller, 22</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#EA1D2C" />
        </View>
        <View style={styles.bellContainer}>
          <Feather name="bell" size={20} color="#EA1D2C" />
          <View style={styles.badge}><Text style={styles.badgeText}>1</Text></View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Barra de Pesquisa */}
        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="#717171" />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Item ou loja" 
            placeholderTextColor="#717171" 
          />
        </View>

        {/* Categorias */}
        <View style={styles.gridContainer}>
          {CATEGORIAS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.gridItem}>
              <View style={styles.categoryIconBox}>
                <MaterialIcons name={item.icone} size={24} color="#EA1D2C" />
              </View>
              <Text style={styles.categoryText} numberOfLines={1}>{item.titulo}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Banners com imagens online */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
          {BANNERS.map((banner) => (
            <View key={banner.id} style={[styles.bannerCard, { backgroundColor: banner.cor }]}>
              <View style={{ flex: 1, paddingRight: 8 }}>
                <Text style={styles.bannerSubtitle}>{banner.titulo}</Text>
                <Text style={styles.bannerTitle}>{banner.destaque}</Text>
                <View style={styles.bannerButton}><Text style={styles.bannerButtonText}>Pedir agora</Text></View>
              </View>
              <Image 
                source={{ uri: banner.img }} 
                style={styles.bannerImage} 
                resizeMode="cover" 
              />
            </View>
          ))}
        </ScrollView>

        {/* Promoções com imagens online */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Promoções com entrega grátis</Text>
            <TouchableOpacity>
              <Text style={styles.verMaisText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={{ gap: 12 }}>
            {PROMOCOES.map((promo) => (
              <TouchableOpacity key={promo.id} style={styles.promoCard}>
                <Image 
                  source={{ uri: promo.img }} 
                  style={styles.promoImage} 
                  resizeMode="cover" 
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.promoName} numberOfLines={1}>{promo.nome}</Text>
                  <View style={styles.row}>
                    <Text style={styles.promoPriceCurrent}>{promo.precoAtual}</Text>
                    <Text style={styles.promoPriceOld}>{promo.precoAntigo}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.promoMeta}>{promo.tempo}</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.promoFreeShipping}>{promo.frete}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Famosos no iFood com imagens online em formato circular */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Famosos no iFood</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16, marginTop: 12 }}>
            {FAMOSOS.map((loja) => (
              <TouchableOpacity key={loja.id} style={{ alignItems: 'center', width: 70 }}>
                <Image 
                  source={{ uri: loja.img }} 
                  style={styles.famosoCircleImage} 
                  resizeMode="contain" 
                />
                <Text style={styles.couponName} numberOfLines={1}>{loja.nome}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Lojas com imagens online */}
        <View style={[styles.section, { marginTop: 24 }]}>
          <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>Lojas</Text>
          <View style={{ gap: 20 }}>
            {RESTAURANTES.map((rest) => (
              <TouchableOpacity key={rest.id} style={styles.restauranteCard}>
                <Image 
                  source={{ uri: rest.img }} 
                  style={styles.restAvatarImage} 
                  resizeMode="contain" 
                />
                <View style={styles.restInfo}>
                  <Text style={styles.restName}>{rest.nome}</Text>
                  <View style={[styles.row, { marginTop: 2 }]}>
                    <MaterialIcons name="star" size={12} color="#E2B93B" />
                    <Text style={styles.restNota}>{rest.nota}</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.restMeta}>{rest.categoria}</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.restMeta}>{rest.distancia}</Text>
                  </View>
                  <View style={[styles.row, { marginTop: 4 }]}>
                    <Text style={styles.restMeta}>{rest.tempo}</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={rest.frete === 'Grátis' ? styles.promoFreeShipping : styles.restMeta}>{rest.frete}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>

      {/* Barra Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#EA1D2C" />
          <Text style={[styles.navText, { color: '#EA1D2C', fontWeight: 'bold' }]}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="search" size={24} color="#717171" />
          <Text style={styles.navText}>Busca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="file-text" size={24} color="#717171" />
          <Text style={styles.navText}>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="user" size={24} color="#717171" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#fff' },
  row: { flexDirection: 'row', alignItems: 'center' },
  addressText: { fontSize: 14, fontWeight: 'bold', color: '#262626', marginRight: 4 },
  bellContainer: { position: 'relative' },
  badge: { position: 'absolute', top: -4, right: -4, backgroundColor: '#EA1D2C', width: 14, height: 14, borderRadius: 7, alignItems: 'center', justifyContent: 'center' },
  badgeText: { color: '#fff', fontSize: 9, fontWeight: 'bold' },
  scrollContent: { paddingBottom: 100 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f5f5f5', marginHorizontal: 16, paddingHorizontal: 12, height: 44, borderRadius: 8, marginTop: 4, marginBottom: 16 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 14, color: '#262626' },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 8, marginBottom: 4 },
  gridItem: { width: (width - 16) / 4, alignItems: 'center', marginBottom: 16 },
  categoryIconBox: { width: 56, height: 56, borderRadius: 16, backgroundColor: '#fafafa', borderWidth: 1, borderColor: '#f4f4f5', alignItems: 'center', justifyContent: 'center', marginBottom: 6 },
  categoryText: { fontSize: 11, color: '#52525b', textAlign: 'center' },
  horizontalScroll: { paddingHorizontal: 16, gap: 12, paddingBottom: 16 },
  bannerCard: { width: 300, height: 120, borderRadius: 16, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden' },
  bannerSubtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 12 },
  bannerTitle: { color: '#fff', fontSize: 18, fontWeight: '900', marginTop: 2 },
  bannerButton: { backgroundColor: 'rgba(255,255,255,0.25)', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, marginTop: 10 },
  bannerButtonText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  bannerImage: { width: 80, height: 80, borderRadius: 12, backgroundColor: '#f0f0f0' },
  section: { paddingHorizontal: 16, marginTop: 16 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#262626' },
  verMaisText: { fontSize: 13, fontWeight: 'bold', color: '#EA1D2C' },
  promoCard: { flexDirection: 'row', backgroundColor: '#fff', borderWidth: 1, borderColor: '#f4f4f5', borderRadius: 12, padding: 12, alignItems: 'center' },
  promoImage: { width: 60, height: 60, borderRadius: 8, marginRight: 12, backgroundColor: '#f0f0f0' },
  promoName: { fontSize: 14, fontWeight: 'bold', color: '#262626', marginBottom: 4 },
  promoPriceCurrent: { fontSize: 14, fontWeight: 'bold', color: '#16a34a', marginRight: 8 },
  promoPriceOld: { fontSize: 12, color: '#a3a3a3', textDecorationLine: 'line-through' },
  promoMeta: { fontSize: 12, color: '#737373' },
  dot: { fontSize: 12, color: '#a3a3a3', marginHorizontal: 4 },
  promoFreeShipping: { fontSize: 12, color: '#16a34a', fontWeight: '600' },
  
  /* Estilo circular exclusivo para as imagens dos Famosos */
  famosoCircleImage: { width: 64, height: 64, borderRadius: 32, marginBottom: 6, backgroundColor: '#f9fafb', borderWidth: 1, borderColor: '#f4f4f5' },
  couponName: { fontSize: 12, color: '#52525b', textAlign: 'center' },
  
  restauranteCard: { flexDirection: 'row', alignItems: 'center' },
  restAvatarImage: { width: 60, height: 60, borderRadius: 30, marginRight: 16, borderWidth: 1, borderColor: '#f4f4f5', backgroundColor: '#f9fafb' },
  restInfo: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#f4f4f5', paddingBottom: 16 },
  restName: { fontSize: 15, fontWeight: 'bold', color: '#262626' },
  restNota: { fontSize: 12, fontWeight: 'bold', color: '#ca8a04', marginLeft: 2 },
  restMeta: { fontSize: 12, color: '#737373' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#f4f4f5', backgroundColor: '#fff', paddingVertical: 10, position: 'absolute', bottom: 0, left: 0, right: 0 },
  navItem: { flex: 1, alignItems: 'center' },
  navText: { fontSize: 10, color: '#737373', marginTop: 4 },
});