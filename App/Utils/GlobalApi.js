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
const getCategories = async () => {
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


const getBusinessList = async () => {
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

const getBusinessListByCategory = async (category) => {
  const query = gql`query GetBusinessList {
    businessLists(where: {category: {name: "`+ category + `"}}) {
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


const createBooking = async (data) => {
  const query = gql`
  mutation CreateBooking {
    createBooking(
      data: {bookingStatus: Agendado, 
        businessList: {connect: {id: "`+ data.businessId + `"}}, 
        date: "`+ data.date + `", 
        time: "`+ data.time + `", 
        userEmail: "`+ data.userEmail + `", 
        userName: "`+ data.userName + `"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  
  `
  const result = await request(MASTER_URL, query);
  return result
}



const GetUserBooking = async (data) => {
  const query = gql`
  query GetUserBooking {
    bookings(where: {userEmail: "`+data.userEmail+`"}, orderBy: updatedAt_DESC) {
      id
      bookingStatus
      date
      time
      userEmail
      userName
      businessList {
        images {
          url
        }
        address
        about
        contactPerson
        id
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
  getBusinessListByCategory,
  createBooking,
  GetUserBooking
}