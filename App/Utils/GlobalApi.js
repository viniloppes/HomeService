import { request, gql } from 'graphql-request'
const MASTER_URL = "https://api-sa-east-1.hygraph.com/v2/clrcq583e20n401waq1amt3ji/master";
const getSlider = async () => {
    const document = gql`
    query GetSliders {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
`
    const result = await request(MASTER_URL, document);
    return result
}

export default {
    getSlider
}