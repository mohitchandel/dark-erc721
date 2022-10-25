import Link from "next/link";
import { Navbar, Text, Avatar, Dropdown, Button } from "@nextui-org/react";
import { Box } from "./Box";
import { ConnectButton } from "@rainbow-me/rainbowkit";


export const Navigation = ({ children, active }) => {

  return (
    <Box
      css={{
        maxW: "100%",
        bg: "#fff",
      }}
    >
      <Navbar variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">
            Dark APE
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Link href="/">
            <Navbar.Link
              isActive={active == "home" ? true : false}
              css={{ cursor: "pointer", color: "#000" }}
            >
              Home
            </Navbar.Link>
          </Link>
          <Link href="/mint">
            <Navbar.Link
              isActive={active == "mint" ? true : false}
              css={{ cursor: "pointer", color: "#000" }}
            >
              Get Your NFT
            </Navbar.Link>
          </Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <ConnectButton label="Login with MetaMask" />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          <Link color="inherit" href="/">
            DAO
          </Link>
          <Link color="inherit" href="/mint">
            Get Your NFT
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </Box>
  );
};
