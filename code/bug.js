import { Document, Page, View, Text } from "@react-pdf/renderer";

const Bug = () => (
  <Document>
    <Page>
      <View
        render={({ pageNumber }) => <Text>Im visible in all pages!</Text>}
      />

      <Text
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

// hack for hmr
const exportComponent = { component: Bug };
export default exportComponent;
