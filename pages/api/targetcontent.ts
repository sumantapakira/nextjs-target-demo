import type { NextApiRequest, NextApiResponse } from 'next'
import getTargetResponse from '../../services/target-service';
const TargetNodeClient  = require("@adobe/target-node-client");
const CONFIG = {
    client: "clientid",
    host: "yourhost",
    secure: true,
    timeout: 10000,
    debug: true,
    organizationId: 'yourorgid@AdobeOrg'
  };
  const client = TargetNodeClient.create({config: CONFIG});

type Data = {
  content: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const request = {
    payload: {
      mboxes: [{
        mbox: "z1-serverside-ab",
        indexId: 0
      },{
        mbox: "shop-landing-page-xt",
        indexId: 0
      }]
    }
  };
try{
 const targetoffer =  await client.getOffers(request)
  .then((response: any) => { 
  console.log('Response ###########:::  ', JSON.stringify(response.content, null, ' ')) 
  return {
    targetImageContent : response.content.mboxResponses[0].content,
    targetCountrySpecificContent : response.content.mboxResponses[1].content
  }
  } )
  .catch((error: any) => console.error('Error', error));
    
  res.status(200).json({ content: targetoffer })
}catch(ex: any){
  res.statusCode = 500;
  res.send(ex.message);
}

}
