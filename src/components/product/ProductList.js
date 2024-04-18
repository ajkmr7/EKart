// Libraries
import {FlatList, Text} from 'react-native';

// Components
import Card from '../../components/product/Card';

const ProductList = ({products, cardStyle}) => {
  const renderProduct = itemData => {
    return <Card product={itemData.item} style={cardStyle} />;
  };

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      numColumns={2}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductList;
