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
 const getCategories = async() =>{
  const query = gql`query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result
 }


 const getBusinessList =async () =>{
  const query = gql`query GetBusinessList {
    businessLists {
      id
      name
      address
      email
      contactPerson
      category {
        name
      }
      about
      images {
        url
      }
    }
  }
  
  `
  const result = await request(MASTER_URL, query);
  return result
 }

 const getBusinessListByCategory= async (category)=>{
  const query = gql`query GetBusinessList {
    businessLists(where: {category: {name: "`+ category+`"}}) {
      id
      name
      address
      email
      contactPerson
      category {
        name
      }
      about
      images {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result
 }
export default {
    getSlider,
    getCategories,
    getBusinessList,
    getBusinessListByCategory
}