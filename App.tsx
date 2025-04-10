import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import * as Animatable from "react-native-animatable";

const skills = [
  {
    title: "React Native",
    description: "I break things fast. Then fix faster.",
    image: require("./assets/rn-meme.jpg"),
  },
  {
    title: "JavaScript",
    description: "undefined is not a function... until I fix it 😎",
    image: require("./assets/js-meme.jpg"),
  },
  {
    title: "TypeScript",
    description:
      "“I told TypeScript it was a string, and it told me I was wrong.”– Who's really in control here?",
    image: require("./assets/Type-meme.png"),
  },
  {
    title: "React Navigation",
    description:
      "I came to navigate... and got lost in my own stack.”(But hey, at least the transitions were smooth 😌)",
    image: require("./assets/RNav-meme.png"),
  },
  {
    title: "Expo CLI",
    description:
      "“I didn’t choose the easy life — Expo CLI chose me.”(...until I had to eject 😭)",
    image: require("./assets/expo-meme.png"),
  },
  {
    title: "Git",
    description: "git commit -m 'final final fix pls work'",
    image: require("./assets/git-meme.jpg"),
  },
];
export default function App() {
  // const [isClicked, setIsClicked] = React.useState(false);
  const [screen, setScreen] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const [showCustomAlert, setShowCustomAlert] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  const SkillCard = ({ card }: any) => {
    return (
      <View style={styles.card}>
        <Image
          source={card.image}
          resizeMode="contain"
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>{card.title}</Text>
        <Text style={styles.cardDescription}>{card.description}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {screen === 0 && (
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            position: "relative",
            backgroundColor: "#4fbaa6",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./assets/background.png")}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              resizeMode: "stretch",
            }}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "26%",
              width: "52%",
              // padding: 10,
              backgroundColor: "#ffe1a5",
              // backgroundColor:"blue",
              borderRadius: 10,
              marginBottom: 50,
              flexDirection: "column",
              // marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 45,
                fontWeight: "900",
                fontFamily: "monospace",
                // backgroundColor: "red",
                color: "black",
              }}
            >
              CODE. MEME. REPEAT.
            </Text>
          </View>
          <Animatable.View animation="fadeIn" duration={300}>
            <TouchableOpacity
              onPress={() => setScreen(1)}
              style={styles.ExploreMore}
            >
              <Text
                style={{
                  fontFamily: "monospace",
                  color: "white",
                  fontWeight: "900",
                  fontSize: 22,
                }}
              >
                LETS GO 🚀
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      )}

      {screen === 1 && (
        <View
          style={{
            width: "100%",
            backgroundColor: "#fec64d",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              // marginTop: -60,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: "10%",
              width: "100%",
              // backgroundColor: "blue",
            }}
          >
            <TouchableOpacity
              onPress={() => setScreen(0)}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back-outline" size={23} />
            </TouchableOpacity>

            <Text style={{ fontWeight: "bold", fontSize: 20 }}>DISCOVER</Text>
            <View
              style={{
                width: "15%",
                height: "70%",
                borderRadius: 70,
                // backgroundColor: "blue",
                marginRight: 10,
              }}
            >
              <Image
                source={require("./assets/dhwani.jpg")}
                style={{ width: "100%", height: "100%", borderRadius: 80 }}
              />
            </View>
          </View>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View>
              <Image
                source={require("./assets/ma.png")}
                resizeMode="cover"
                style={{
                  width: 350,
                  height: 500,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "flex-end",
                // backgroundColor:"red",
                paddingTop: 15,
                paddingBottom: 15,
                gap: 15,
              }}
            >
              <Ionicons
                name="close-circle"
                size={42}
                onPress={() => {
                  setCustomMessage(
                    "Too soon to quit? 😜 Many more memes & madness coming your way..."
                  );
                  setShowCustomAlert(true);
                  setTimeout(() => setShowCustomAlert(false), 3000);
                }}
              />
              <Animatable.View animation="pulse" iterationCount="infinite">
                <Ionicons
                  name={liked ? "heart-circle-outline" : "heart-circle"}
                  size={50}
                  color={liked ? "red" : "black"}
                  onPress={() => setLiked((prev) => !prev)}
                />
              </Animatable.View>
              <Ionicons
                name="arrow-forward-circle"
                size={42}
                onPress={() => {
                  if (liked) {
                    setScreen(2);
                  } else {
                    // Alert.alert(
                    //   "Oops, Not So Fast! 🚫",
                    //   "My skills are shy... they only come out when you tap that heart ❤️"
                    // );

                    setCustomMessage(
                      "My skills are shy... they only come out when you tap that heart ❤️"
                    );
                    setShowCustomAlert(true);
                    setTimeout(() => setShowCustomAlert(false), 3000);
                  }
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                width: "90%",
                // marginBottom:-50
              }}
            >
              <Text
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                “I could tell you about my skills… but it’s way more fun to
                swipe through them 😉”
              </Text>
            </View>
          </View>
        </View>
      )}

      {screen === 2 && (
        <View
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            position: "relative",
            // backgroundColor: "red",
          }}
        >
          <Image
            source={require("./assets/background.png")}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              resizeMode: "stretch",
            }}
          />
          <TouchableOpacity
            onPress={() => setScreen(1)}
            style={{ paddingTop: 68, paddingLeft: 15 }}
          >
            <Ionicons name="arrow-back-outline" size={23} />
          </TouchableOpacity>

          <View
            style={{
              // backgroundColor: "yellow",
              height: "100%",
              width: "100%",
              flex: 1,
            }}
          >
            <Swiper
              cards={skills}
              renderCard={(card) => <SkillCard card={card} />}
              onSwipedAll={() => setScreen(3)}
              cardIndex={0}
              disableRightSwipe={true}
              disableBottomSwipe={true}
              disableTopSwipe={true}
              backgroundColor="transparent"
              stackSize={6}
              showSecondCard={true}
            />
          </View>
          <TouchableOpacity
            style={{ position: "absolute", bottom: 70, right: 20 }}
          >
            <Animatable.View animation="tada" iterationCount="infinite">
              <MaterialIcons name="swipe-left" size={36} color="white" />
            </Animatable.View>
          </TouchableOpacity>
          <Text
            style={{
              position: "absolute",
              bottom: 45,
              right: 12,
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "monospace",
            }}
          >
            Swipe
          </Text>
        </View>
      )}

      {screen === 3 && (
        <View
          style={{ backgroundColor: "#fef6e4", width: "100%", height: "100%" }}
        >
          <TouchableOpacity
            onPress={() => setScreen(0)}
            style={{ paddingTop: 68, paddingLeft: 15 }}
          >
            <Ionicons name="arrow-back-outline" size={23} />
          </TouchableOpacity>

          <View style={styles.finalContainer}>
            <Animatable.View animation="fadeInUp">
              <Text style={styles.title}>So… are we a match? 😏</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={500}>
              <TouchableOpacity
                style={styles.hireButton}
                onPress={() => {
                  // open mail or form link
                  Linking.openURL(
                    "mailto:dhwanigupta1632003@gmail.com?subject=Congratulations%20you%20got%20the%20job"
                  );
                }}
              >
                <Text style={styles.buttonText}>Yes, Let’s Work Together!</Text>
              </TouchableOpacity>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={1000}>
              <TouchableOpacity
                style={styles.resumeButton}
                onPress={() => {
                  // external PDF link
                  Linking.openURL(
                    "https://drive.google.com/file/d/1LaKznjs3mkEyKKUaFOxzNuIOJnHgBops/view?usp=sharing"
                  );
                }}
              >
                <Text style={styles.buttonText}>
                  Still not sure? View Resume 📄
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </View>
      )}

      {showCustomAlert && (
        <Animatable.View
          animation="fadeInUp"
          duration={500}
          style={{
            position: "absolute",
            bottom: 50,
            backgroundColor: "#fff8dc",
            padding: 15,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#f59e0b",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#dc2626" }}>
            🚫 Oops, Not So Fast!
          </Text>
          <Text style={{ fontStyle: "italic", color: "#333", marginTop: 5 }}>
            {customMessage}
          </Text>
        </Animatable.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ExploreMore: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    // height: "10%",
    backgroundColor: "#f67319",
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  card: {
    // display: "flex",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: "80%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  cardImage: {
    width: 300,
    height: "70%",
    borderRadius: 15,
    marginBottom: 15,
    // backgroundColor:"green"
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "monospace",
    textAlign: "center",
    // backgroundColor: "red",
    marginBottom: 10,
  },

  cardDescription: {
    fontSize: 16,
    fontFamily: "monospace",
    textAlign: "center",
    // backgroundColor:"blue"
  },
  finalContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    fontFamily: "monospace",
    textAlign: "center",
  },
  hireButton: {
    backgroundColor: "#4fbaa6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    // fontWeight: "bold",
  },
  resumeButton: {
    
    backgroundColor: "#FF9839",
    padding: 15,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 3,
    width: "80%",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
});
