import Link from "next/link";
import { Navbar, Text, Grid, Button, Avatar } from "@nextui-org/react";
import { Box } from "./Box";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { signOut, useSession } from "next-auth/react";
import { useAccount } from "wagmi";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const Navigation = ({ children, active }) => {
  const { data: session, status } = useSession();
  const { address } = useAccount();
  const { openAccountModal } = useAccountModal();

  const getSessionTimeLeft = () => {
    const sessionExp = session?.expires;
    const sessionTime = new Date(sessionExp);
    console.log(sessionTime);
    const diffMs = sessionTime.getTime() - Date.now();
    const minDiff = ((diffMs % 86400000) % 3600000) / 60000;
    console.log(minDiff);
    if (minDiff >= 0.9 && minDiff <= 1.1) {
      Swal.fire({
        icon: "info",
        title: "session will end in one minute",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getSessionTimeLeft();
    }, 6000);
    return () => clearInterval(interval);
  }, [status]);

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
            <div>
              <Grid.Container>
                <Grid css={{ padding: "10px" }}>
                  {address ? (
                    <Avatar
                      onClick={openAccountModal}
                      src="./avt.png"
                      size="sm"
                    />
                  ) : (
                    <ConnectButton
                      accountStatus="avatar"
                      showBalance={false}
                      label="Login with MetaMask"
                    />
                  )}
                </Grid>
                <Grid css={{ margin: "auto" }}>
                  {status === "authenticated" && address ? (
                    <Button
                      size={"xs"}
                      href={`/api/auth/signout`}
                      onClick={(e) => {
                        // e.preventDefault();
                        signOut();
                      }}
                    >
                      Sign out
                    </Button>
                  ) : (
                    <></>
                  )}
                </Grid>
              </Grid.Container>
            </div>
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
