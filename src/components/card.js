import { Text, StyleSheet, ImageBackground, View } from "react-native";

export const Card = ({ quote = "test" }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.coverImage}
        source={{
          uri: "https://loremflickr.com/320/240/brazil,rio",
        }}
      >
        <View style={styles.textView}>
          <Text style={styles.imageText}>{quote}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  textView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
