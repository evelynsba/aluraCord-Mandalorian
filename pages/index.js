import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
import React from "react";
import { useRouter } from "next/router";

function Title(props) {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <br />

      <style jsx>{`
        ${Tag} {
          font-size: 24px;
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-wight: 600;
        }
      `}</style>
    </>
  );
}

function HomePage() {
  // const username = "evelynsba";

  const [username, setUsername] = React.useState("");
  const router = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[100],
          backgroundImage: `url(/mandalorian.jpg)`,
          //   backgroundImage:
          //     "url(https://images.wallpapersden.com/image/download/cool-the-mandalorian-2_bGdmaWmUmZqaraWkpJRnamtlrWZlbWU.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            backgroundColor: "rgba(0, 0, 0, 0.63)",
            border: "1px solid rgba(0, 0, 0, 0.88)",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            borderColor: appConfig.theme.colors.neutrals[999],
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(2.6px)",
            webkitBackdropFilter: "blur(2.6px)",
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (eventsInfo) {
              //previnir o refresh
              eventsInfo.preventDefault();
              console.log("form subimeted");
              router.push("/chat");
              //primeira forma de fazer o redirecionamento
              // window.location.href = '/chat';
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">Wecome back Mandalorians! :)</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals["000"],
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input type="text"
              value={username}
              onChange={function(event){
                console.log('usuario digitou', event.target.value);
                // variavel com o retorno do valor
                const valor = event.target.value;
                // trocar o valor visivel 
                setUsername(valor)
              }} */}
            <TextField
              value={username}
              onChange={function (event) {
                console.log("usuario digitou", event.target.value);
                // variavel com o retorno do valor
                const valor = event.target.value;
                // trocar o valor visivel
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[100],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[100],
                mainColorLight: appConfig.theme.colors.primary[200],
                mainColorStrong: appConfig.theme.colors.primary[200],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
              backgroundColor: "rgba(0, 0, 0, 0.23)",
              border: "1px solid rgba(0, 0, 0, 0.88)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(2.7px)",
              webkitBackdropFilter: "blur(2.7px)",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
export default HomePage;
