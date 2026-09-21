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

const BANNERS = [
  {
    id: '1',
    cor: '#006039',
    titulo: 'bora pedir de novo?',
    destaque: 'peça por R$ 0,99',
    img: 'https://i.imgur.com/CEVUdju.png',
  },
  {
    id: '2',
    cor: '#EA1D2C',
    titulo: 'fome de quê?',
    destaque: 'até 50% OFF',
    img: 'https://i.imgur.com/O5c3lyU.png',
  },
  {
    id: '3',
    cor: '#F59E0B',
    titulo: 'hoje combina com',
    destaque: 'uma pizza!',
    img: 'https://i.imgur.com/0UjG3wk.png',
  },
];

const COMIDAS_EM_ALTA = [
  {
    id: '6',
    nome: 'Big Mac (Mc)',
    preco: 'R$ 34,90',
    tempo: '25-35 min',
    frete: 'R$ 4,99',
    nota: '4.7',
    img: 'https://vejasp.abril.com.br/wp-content/uploads/2016/11/big-mac_ok.jpeg?quality=70&w=575&h=360&crop=1',
  },
  {
    id: '7',
    nome: 'Balde 12 Pedaços (KFC)',
    preco: 'R$ 69,90',
    tempo: '30-40 min',
    frete: 'Grátis',
    nota: '4.8',
    img: 'https://scontent.fcgh38-1.fna.fbcdn.net/v/t39.30808-6/461778937_3222835794518778_42718732968284917_n.png?stp=dst-jpg_tt6&cstp=mx800x800&ctp=s800x800&_nc_cat=107&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=JJ8jGwyS4BEQ7kNvwF4A9bY&_nc_oc=Ado5SWgcS3eCHFhzh_0-bRd2y6Loz1ku63thf-a60eQlIcugid7jbKax16-7TfPKjsE&_nc_zt=23&_nc_ht=scontent.fcgh38-1.fna&_nc_gid=NuSOzWa4jLS52kp-RYTWgQ&_nc_ss=7a289&oh=00_AQKJIXMTESuo6PAzWUd7m3yU_g1mBobbpPh5Ewi1EbEx1w&oe=6AB72D75',
  },
  {
    id: '3',
    nome: 'Burguer Dev',
    preco: 'R$ 40,00',
    tempo: '50-60 min',
    frete: 'R$ 5,99',
    nota: '4.5',
    img: 'https://i.imgur.com/O5c3lyU.png',
  },
  {
    id: '4',
    nome: 'Picanha Grill',
    preco: 'R$ 36,00',
    tempo: '50-60 min',
    frete: 'R$ 5,99',
    nota: '4.4',
    img: 'https://i.imgur.com/0UjG3wk.png',
  },
  {
    id: '5',
    nome: 'Açaí 300ml',
    preco: 'R$ 20,00',
    tempo: '20-30 min',
    frete: 'R$ 2,99',
    nota: '4.4',
    img: 'https://i.imgur.com/BaUUCkc.png',
  },
];

const FAMOSOS = [
  {
    id: '1',
    nome: 'KFC',
    img: 'https://i.imgur.com/sZ1Jye3.png',
  },
  {
    id: '2',
    nome: "McDonald's",
    img: 'https://i.imgur.com/su4iB3p.png',
  },
  {
    id: '3',
    nome: 'Outback',
    img: 'https://i.imgur.com/jg3GJVN.png',
  },
  {
    id: '4',
    nome: 'Sushi Dev',
    img: 'https://i.imgur.com/ffYWFBX.png',
  },
  {
    id: '5',
    nome: 'Burguer Grill',
    img: 'https://i.imgur.com/kmQvG2T.png',
  },
  {
    id: '6',
    nome: 'Marmitas',
    img: 'https://i.imgur.com/uXRuDFD.png',
  },
];

const RESTAURANTES = [
  {
    id: '1',
    nome: 'KFC',
    categoria: 'Lanches',
    nota: '4.8',
    tempo: '30-40 min',
    frete: 'R$ 5,99',
    img: 'https://i.imgur.com/sZ1Jye3.png',
  },
  {
    id: '2',
    nome: "McDonald's",
    categoria: 'Lanches',
    nota: '4.7',
    tempo: '25-35 min',
    frete: 'R$ 4,99',
    img: 'https://i.imgur.com/su4iB3p.png',
  },
  {
    id: '3',
    nome: 'Outback',
    categoria: 'Comida',
    nota: '4.9',
    tempo: '40-50 min',
    frete: 'R$ 6,99',
    img: 'https://i.imgur.com/jg3GJVN.png',
  },
  {
    id: '4',
    nome: 'Sushi Dev',
    categoria: 'Japonesa',
    nota: '4.8',
    tempo: '40-50 min',
    frete: 'R$ 5,99',
    img: 'https://i.imgur.com/ffYWFBX.png',
  },
  {
    id: '5',
    nome: 'Burguer Grill',
    categoria: 'Hambúrguer',
    nota: '4.6',
    tempo: '35-45 min',
    frete: 'R$ 5,99',
    img: 'https://i.imgur.com/kmQvG2T.png',
  },
];

export default function Home() {
  const router = useRouter();
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  const categorias = [
    'Todos',
    'Lanches',
    'Pizza',
    'Japonesa',
    'Brasileira',
    'Doces',
  ];

  const handleStorePress = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes('mcdonald')) {
      router.push('/mcdonalds');
    } else if (lower.includes('kfc')) {
      router.push('/kfc');
    } else {
      router.push('/kfc'); // fallback ou redirecionamento padrão
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* CABEÇALHO */}
        <View style={styles.header}>
          <View>
            <Text style={styles.locationLabel}>Entregar em</Text>
            <TouchableOpacity>
              <Text style={styles.location}>📍 Rua Principal, 123</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* BUSCA */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar no iFood"
            placeholderTextColor="#64748B"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        {/* CATEGORIAS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categorias.map((categoria) => (
            <TouchableOpacity
              key={categoria}
              style={[
                styles.categoryButton,
                categoriaSelecionada === categoria &&
                  styles.categoryButtonActive,
              ]}
              onPress={() => setCategoriaSelecionada(categoria)}
            >
              <Text
                style={[
                  styles.categoryText,
                  categoriaSelecionada === categoria &&
                    styles.categoryTextActive,
                ]}
              >
                {categoria}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* BANNERS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerContainer}
        >
          {BANNERS.map((banner) => (
            <TouchableOpacity
              key={banner.id}
              style={[styles.banner, { backgroundColor: banner.cor }]}
            >
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerTitle}>{banner.titulo}</Text>
                <Text style={styles.bannerHighlight}>{banner.destaque}</Text>
                <TouchableOpacity style={styles.bannerButton}>
                  <Text style={styles.bannerButtonText}>Pedir agora</Text>
                </TouchableOpacity>
              </View>

              <Image
                source={{ uri: banner.img }}
                style={styles.bannerImage}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* COMIDAS EM ALTA */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Comidas em alta</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.foodContainer}
        >
          {COMIDAS_EM_ALTA.map((food) => (
            <TouchableOpacity key={food.id} style={styles.foodCard}>
              <View>
                <Image
                  source={{ uri: food.img }}
                  style={styles.foodImage}
                  resizeMode="cover"
                />
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>★ {food.nota}</Text>
                </View>
              </View>

              <Text style={styles.foodName} numberOfLines={1}>
                {food.nome}
              </Text>

              <Text style={styles.foodPrice}>{food.preco}</Text>
              <Text style={styles.foodInfo}>
                {food.tempo} • {food.frete}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* RESTAURANTES FAMOSOS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Restaurantes famosos</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.famousContainer}
        >
          {FAMOSOS.map((loja) => (
            <TouchableOpacity
              key={loja.id}
              style={styles.famousItem}
              onPress={() => handleStorePress(loja.nome)}
            >
              <View style={styles.famousImageContainer}>
                <Image
                  source={{ uri: loja.img }}
                  style={styles.famousImage}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.famousName} numberOfLines={1}>
                {loja.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* RESTAURANTES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Restaurantes perto de você</Text>
        </View>

        <View style={styles.restaurantList}>
          {RESTAURANTES.map((restaurant) => (
            <TouchableOpacity
              key={restaurant.id}
              style={styles.restaurantCard}
              onPress={() => handleStorePress(restaurant.nome)}
            >
              <View style={styles.restaurantImageContainer}>
                <Image
                  source={{ uri: restaurant.img }}
                  style={styles.restaurantImage}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>
                  {restaurant.nome}
                </Text>
                <Text style={styles.restaurantCategory}>
                  {restaurant.categoria}
                </Text>

                <View style={styles.restaurantDetails}>
                  <Text style={styles.restaurantRating}>
                    ★ {restaurant.nota}
                  </Text>
                  <Text style={styles.restaurantDetail}>
                    {restaurant.tempo}
                  </Text>
                  <Text style={styles.restaurantDetail}>
                    {restaurant.frete}
                  </Text>
                </View>
              </View>

              <Text style={styles.arrow}>›</Text>
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

  /* CABEÇALHO */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 16,
  },

  locationLabel: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 3,
  },

  location: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },

  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    fontSize: 21,
  },

  /* BUSCA */
  searchContainer: {
    height: 48,
    marginHorizontal: 18,
    marginBottom: 15,
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

  /* CATEGORIAS */
  categoriesContainer: {
    paddingHorizontal: 18,
    paddingBottom: 18,
    gap: 8,
  },

  categoryButton: {
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
  },

  categoryButtonActive: {
    backgroundColor: '#EA1D2C',
  },

  categoryText: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '600',
  },

  categoryTextActive: {
    color: '#FFFFFF',
  },

  /* BANNERS */
  bannerContainer: {
    paddingHorizontal: 18,
    gap: 12,
  },

  banner: {
    width: 335,
    height: 155,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingLeft: 20,
    paddingRight: 10,
  },

  bannerTextContainer: {
    flex: 1,
    paddingRight: 5,
  },

  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },

  bannerHighlight: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 12,
  },

  bannerButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },

  bannerButtonText: {
    color: '#111827',
    fontSize: 12,
    fontWeight: '700',
  },

  bannerImage: {
    width: 125,
    height: 125,
    borderRadius: 18,
  },

  /* TÍTULOS DAS SEÇÕES */
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginTop: 26,
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#111827',
  },

  seeAll: {
    fontSize: 13,
    fontWeight: '700',
    color: '#EA1D2C',
  },

  /* COMIDAS */
  foodContainer: {
    paddingHorizontal: 18,
    gap: 14,
  },

  foodCard: {
    width: 190,
  },

  foodImage: {
    width: 190,
    height: 145,
    borderRadius: 15,
    backgroundColor: '#E2E8F0',
  },

  rating: {
    position: 'absolute',
    left: 9,
    bottom: 9,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  ratingText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#111827',
  },

  foodName: {
    marginTop: 9,
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },

  foodPrice: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },

  foodInfo: {
    marginTop: 4,
    fontSize: 11,
    color: '#64748B',
  },

  /* RESTAURANTES FAMOSOS */
  famousContainer: {
    paddingHorizontal: 18,
    gap: 17,
  },

  famousItem: {
    width: 82,
    alignItems: 'center',
  },

  famousImageContainer: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },

  famousImage: {
    width: '100%',
    height: '100%',
  },

  famousName: {
    marginTop: 7,
    fontSize: 11,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
  },

  /* LISTA DE RESTAURANTES */
  restaurantList: {
    paddingHorizontal: 18,
  },

  restaurantCard: {
    minHeight: 94,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingVertical: 12,
  },

  restaurantImageContainer: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  restaurantImage: {
    width: '100%',
    height: '100%',
  },

  restaurantInfo: {
    flex: 1,
    marginLeft: 13,
  },

  restaurantName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },

  restaurantCategory: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 3,
  },

  restaurantDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    gap: 9,
  },

  restaurantRating: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111827',
  },

  restaurantDetail: {
    fontSize: 11,
    color: '#64748B',
  },

  arrow: {
    fontSize: 27,
    color: '#94A3B8',
    marginLeft: 8,
  },

  bottomSpace: {
    height: 20,
  },
});