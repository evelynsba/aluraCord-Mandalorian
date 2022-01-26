import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";

export default function ChatPage() {
  // Sua lógica vai aqui

  // ./Sua lógica vai aqui
  const [message, setMessage] = React.useState("");

  // this is going to be an array of messages 
  const [messageList, setMessageList] = React.useState([]);

  function handleNewMessage
                    // we need to call the method setMessageList, to push a new message into de array(newMessage){
      setMessageList([
          ...messageList,
          newMessage,
      ]);
      setMessage("");
  }
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(/mandalorian.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          // backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
          backgroundColor: "rgba(0, 0, 0, 0.63)",
          border: "1px solid rgba(0, 0, 0, 0.88)",
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderColor: appConfig.theme.colors.neutrals[999],
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(2.6px)",
          webkitBackdropFilter: "blur(2.6px)",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          {/* testando a variavel valor q esta pegando o valor do input
            Ta mudando o valor? {message} */}
          {/* <MessageList mensagens={[]} /> */}
          {messageList.map((currentMessage) =>{
              console.log(currentMessage)
              return(
                  <li>
                      {currentMessage}
                  </li>
              )
          })}

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={message}
              onChange={(event) => {
                const messageValue = event.target.value;
                setMessage(messageValue);
              }}
              onKeyPress={(event) => {
                if(event.key === "Enter") {
                    event.preventDefault();
                  console.log(event);

                    handleNewMessage();
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "90%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
              styleSheet={{
                padding: "10px",
                // textAlign: "center",
                // // paddingBottom: "10px",
                marginLeft: "10px",
                width: "10%",
              }}
              variant="tertiary"
              colorVariant="primary"
              label="Send"
              href="/"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="primary"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  console.log("MessageList", props);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      <Text
        key={mensagem.id}
        tag="li"
        styleSheet={{
          borderRadius: "5px",
          padding: "6px",
          marginBottom: "12px",
          hover: {
            backgroundColor: appConfig.theme.colors.neutrals[700],
          },
        }}
      >
        <Box
          styleSheet={{
            marginBottom: "8px",
          }}
        >
          <Image
            styleSheet={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "8px",
            }}
            src={`https://github.com/vanessametonini.png`}
          />
          <Text tag="strong">{mensagem.de}</Text>
          <Text
            styleSheet={{
              fontSize: "10px",
              marginLeft: "8px",
              color: appConfig.theme.colors.neutrals[300],
            }}
            tag="span"
          >
            {new Date().toLocaleDateString()}
          </Text>
        </Box>
        {mensagem.texto}
      </Text>
    </Box>
  );
}
