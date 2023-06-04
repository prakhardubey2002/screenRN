import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import comments from './Dummy';
import { height, width } from '../../config/dimension'
export default function Comment({ navigation }) {
  const [text, setText] = useState("Comment")
  useEffect(() => {
    console.log(text)
    // Header
    navigation.setOptions({
      title: "Comment",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerStyle: {
        // backgroundColor: '#EC303A',
        height: 50,
      },
      headerTitle: () => (
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Text style={{ color: "#EC303A", marginLeft: 110, fontSize: 18, fontFamily: "PoppinsBold" }} >Aasabie</Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <FontAwesome5 name="grip-lines" size={28} color="#EC303A" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: 70,
          marginRight: 20,
        }} >
          <TouchableOpacity>
            <Ionicons name="notifications-circle-outline" size={28} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="message-reply-text" size={28} color="grey" />
          </TouchableOpacity>
        </View>
      )
    });
  }, [])
  const [{ image }] = comments;
  const Comment = ({ comment }) => {
    return (
      // Main Comment
      <View style={{ marginLeft: 16 }}>
        {comment.id == 1 && (
          <View style={styles.commentview}>

            <Image
              style={styles.icon}
              source={{ uri: comment.image }}
            />
            <View style={styles.commentlis}>
              <Text style={{
                fontFamily: 'PoppinsSemiBold',
                fontWeight: '700',
                fontSize: 12,
                lineHeight: 14,
              }} >{comment.user}</Text>
              <Text style={styles.commentText} >{comment.text}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Reply</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="heart-circle-outline" size={24} color="#F70D4D" />
            </TouchableOpacity>
          </View>)}
        {/* Nested comment */}
        {comment.id > 1 && (
          <View style={{ flex: 1, flexDirection: "column", marginLeft: "2rem" }}>
            <View style={{ flex: 1, flexDirection: "row", alignContent: "baseline" }} >
              <Text style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: 12,
                lineHeight: 14,

              }} >@{comment.user}</Text>
              <Text style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: 10,
                // lineHeight: 13,
                marginLeft: 4
              }}>{comment.text}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignContent: "baseline", padding: "0.2rem" }} >
              <Text style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: 10,
                lineHeight: 13,
                padding: "0.2rem"
              }}>LiKe</Text>
              <TouchableOpacity>
                <AntDesign name="heart" size={12} color="#F70D4D" />
              </TouchableOpacity>
              <Text style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: 10,
                lineHeight: 13,
                padding: "0.2rem"
              }}>Reply</Text>
            </View>
          </View>
        )}

        {comment.replies && comment.replies.length > 0 && (
          <FlatList
            data={comment.replies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Comment comment={item} />}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.Comment}>
        <TouchableOpacity>
          <Ionicons name="arrow-back-circle-outline" size={28} color="#F70D4D" />
        </TouchableOpacity>
        <Text style={styles.Commenttoptext} >Comment</Text>
      </View>
      <View style={styles.commentsection}>

        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Comment comment={item} />}
        />
      </View>
      <View style={styles.containerinput}>
        <Image source={image} style={styles.commenticon} />
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity style={styles.sendIcon}>
          <Ionicons name="md-send" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:width,
    minHeight:height,
  },
  Comment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0.5rem",
  },
  Commenttoptext: {
    fontFamily: "PoppinsSemiBold",
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
  },
  commentsection: {
    marginLeft: "2rem",
    marginRight: "2rem",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: "4rem"

  },
  button: {
    backgroundColor: '#E8E8E8',
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    height: '22',
    marginHorizontal: "0.2rem"
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 13,

  },
  commentview: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    padding: "1rem"
  },
  commentlis: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: "0.2rem"
  },
  commentText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 13,
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  containerinput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    position: 'fixed',
    bottom: '0',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 10,
    width: "90%",
    height: "86px",
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: 'center',

  },
  commenticon: {
    width: 40,
    height: 40,
    borderRadius: "4rem",
    marginRight: 10,
    position: 'absolute',
    left: 18,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f4f4f4',
    backgroundColor: '#f4f4f4',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 55,
    height: "56px",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13,
  },
  sendIcon: {
    position: 'absolute',
    right: 24,
  },

});
