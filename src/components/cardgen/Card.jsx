import CardTitle from "./CardTitle"
import Button from "../shared/Button";

const Card = () => {

  // handle call
  const handleCall = () => {
    alert("Calling...");
  };

  // handle email
  const handleEmail = () => {
    alert("Emailing...");
  };

  //  const handleWebsite
  const handleWebsite =() => {
    // open www.google.com
    window.open("https://google.com", "_blank");
  }

  return (
    <div className="p-6 bg-blue-500 w-[450px] h-[250px]">
      <div className="bg-white w-full h-full p-4 rounded-xl flex flex-row justify-between items-center">
        <div id="left">
          <CardTitle title="Company Name" color="green" />

          <Button cName="primary default" handleClick={handleCall} >
            <p><i className="fa-solid fa-phone"></i> call</p> </Button>
            
          <Button cName="danger default" handleClick={handleEmail} >
          Email <i className="fa-regular fa-envelope"></i> </Button>
        </div>

        <div className="border-1 border-blue-500 h-[80%]"> </div>
        <div id="right">
          <CardTitle title="Your Name" color="red" />

          <Button handleClick={handleWebsite}>Website</Button>
        </div>
      </div>
    </div>
  )
}

export default Card