export class DinoService {
  async getDinoIpsum(input1, input2) {
    try {
      let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${input1}&words=${input2}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}