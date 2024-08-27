import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://media.licdn.com/dms/image/v2/D5603AQEvUf4gGZ7ZAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718243418050?e=1729728000&v=beta&t=IRJxd25zxAFZ4mnhrJE7Oby1t4qKLXLkeVSS5Cj87nI";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very reasonable price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>By - <b>Rachit</b></Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;