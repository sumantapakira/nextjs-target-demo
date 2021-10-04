import type { NextApiRequest, NextApiResponse } from "next";
const Cookies = require("cookies");
//import Cookies  from 'cookies';
const Visitor = require("@adobe-mcid/visitor-js-server");
const TargetNodeClient  = require("@adobe/target-node-client");
const CONFIG = {
    client: "epam",
    host: "mwtestus.tt.omtrdc.net",
    secure: true,
    timeout: 10000,
    debug: true,
    organizationId: '36DE898555D732137F000101@AdobeOrgk'
  };
  const client = TargetNodeClient.create({config: CONFIG});

/*const getTargetResponse =  (req: NextApiRequest, res: NextApiResponse, payload: any) => {
  const mbox = payload.mbox;
  const visitorData = getVisitorData(mbox, req, res);
  const visitorPayload = visitorData.payload;
  const visitorState = visitorData.state;
  const mboxParams = Object.assign({}, payload.mboxParameters || {}, visitorPayload.mboxParameters || {});
  const profileParams = Object.assign({}, payload.profileParameters || {}, visitorPayload.profileParameters || {});
  const data = Object.assign({}, payload, visitorPayload);
  data.mboxParameters = mboxParams;
  data.profileParameters = profileParams;

 // const promise = getCustomization( req, res);

};*/



function getVisitorData(mbox: any, req: NextApiRequest, res: NextApiResponse) {
    const visitor = new Visitor("36DE898555D732137F000101@AdobeOrg");
    const cookies = new Cookies(req, res);
    console.log("visitor.getCookieName():::" , visitor.getCookieName())
    const amcvCookie = cookies.get(encodeURIComponent(visitor.getCookieName()));
    console.log(mbox)
    console.log(amcvCookie)
    console.log("visitor ###### :: ",visitor);

    const state = visitor.getState();
    console.log("State:::: ",state)
    const payload = visitor.generatePayload({
      sdidConsumerID: mbox,
      amcvCookie: amcvCookie
    });
  
    console.log("payload:::: ",payload)
  
    return {payload, state};
}




async function  getTargetResponse( req: NextApiRequest, res: NextApiResponse){
    const targetCookie = req.cookies[TargetNodeClient.TargetCookieName];
    const request = {
        payload: {
          mboxes: [{
            mbox: "z1-serverside-ab",
            indexId: 0
          }]
        }
      };

return client.getOffers(request)
.then((response: any) => { 
    //console.log('Response ###########:::  ', JSON.stringify(response.content.mboxResponses[0], null, ' ')) 
    return  {
        content: response.content.mboxResponses[0].content
    } 
} )
.catch((error: any) => console.error('Error', error));
  

   /* return client.execute(data, req, res)
      .then((res: { content: any; }) => {
        console.log('response::::::', res);
  
        return {
          content: res.content
        };
      })
      .catch((error: any) => {
        console.log('error', error);
  
        return null;
      });*/
  }

  export default getTargetResponse; 