import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
import React from "react";

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

function Title(props) {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag><br/>

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

  const [username, setUsername] = React.useState('');
  return (
    <>
      <GlobalStyle />
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
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[600],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
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
            onChange={function(event){
              console.log('usuario digitou', event.target.value);
              // variavel com o retorno do valor
              const valor = event.target.value;
              // trocar o valor visivel 
              setUsername(valor)
            }
          }

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
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
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
