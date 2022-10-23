import { Grid, Text } from "@nextui-org/react";

export const NFTCard = () => {
  return (
    <>
      <Grid.Container>
        <Grid md={12}>
          <Text>Let's Make this world more dark</Text>
        </Grid>
        <Grid md={12}>
          <Image
            src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
            alt="Default Image"
            width={300}
            height={200}
          />
        </Grid>
      </Grid.Container>
    </>
  );
};
