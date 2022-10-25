import Link from "next/link";
import Head from "next/head";
import { Navigation } from "../components/Navigation";
import styles from "../styles/Home.module.css";
import {
  Button,
  Image,
  Grid,
  Text,
  Container,
  Row,
  Col,
  Input,
  Spacer,
} from "@nextui-org/react";

export default function Mint() {
  return (
    <div>
      <Head>
        <title>Mint NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation active={"mint"} />
      </header>
      <main className={styles.main}>
        <Container>
          <Row justify="center" align="center">
            <Col span={6}>
              <Grid.Container justify="center" align="center">
                <Grid md={12}>
                  <Input
                    readOnly
                    initialValue={"0x0000"}
                    css={{ w: "50%", margin: "0 auto" }}
                    labelLeft="Address"
                    status="success"
                  />
                </Grid>
                <Grid>
                  <Spacer y={1} />
                  <Button>Mint Your NFT</Button>
                </Grid>
              </Grid.Container>
              <Spacer y={1} />
              <Image
                height={400}
                width={400}
                css={{ borderRadius: "10px" }}
                src="./dark.png"
                alt="Default Image"
                objectFit="cover"
              />
            </Col>
          </Row>
        </Container>
      </main>

      <footer className={styles.footer}>
        <a target="_blank" href="https://mohitchandel.github.io">
          Made by Mohit
        </a>
      </footer>
    </div>
  );
}