import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  windowHeight,
  windowWidth,
} from '../../../resource/functions/Dimensions';
import Button from '../../../components/core/Buttons/Button';
import {ScrollView} from 'react-native-gesture-handler';
import ProductDetailSlider from '../../../components/ProductDetailSlider/ProductDetailSlider';
import {useDispatch} from 'react-redux';
import cartAction from '../../../redux/actions/cartAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
  },
  categoryContainer: {
    flex: 0.1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  category: {
    fontSize: 30,
    fontWeight: '700',
  },
  imageContainer: {
    flex: 0.5,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  image: {
    width: windowWidth / 1.7,
    height: windowHeight / 2.3,
    marginLeft: 15,
  },
  content: {
    flex: 0.25,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  descriptionContainer: {
    marginHorizontal: 20,
  },
  description: {
    fontSize: 18,
    letterSpacing: 0.7,
  },
  footer: {
    flex: 0.15,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
  },
  priceContainer: {
    flex: 0.4,
    justifyContent: 'center',
    marginLeft: 20,
  },
  buttonContainer: {
    flex: 0.6,
  },
  sliderContainer: {
    flex: 0.8,
    width: windowWidth - 20,
  },
});

const ProductDetails = ({navigation, route}) => {
  const {title, image, id, price, description, category} = route.params;
  const products = route.params;
  const dispatch = useDispatch();
  console.warn('set cart products', products);
  const goToShoppingCart = async () => {
    console.warn('products', products);
    await dispatch(cartAction.setCartProduct(products));
    navigation.navigate('ShoppingCart', route.params);
  };
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={styles.sliderContainer}>
        <ProductDetailSlider data={image} />
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <ScrollView>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{description}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{`$ ${price}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            variant="primary"
            label="Add to Cart"
            onPress={() => goToShoppingCart()}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
