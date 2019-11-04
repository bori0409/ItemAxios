import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"
interface IItem{
    id: number,
    name : string,
    quality : string,
    quantity : number
}

//url for the rest webservice at Azure
let itemWebUrl: string = "http://localhost:3452/api/localitems";

let GetAllCarsButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAllButton");
GetAllCarsButton.addEventListener('click',SelectAllCars);
function SelectAllCars(): void{
    axios.get<IItem[]>(itemWebUrl)
    .then(function(response : AxiosResponse<IItem[]>)
    { response.data.forEach((item:IItem) => {
        console.log("the item is "+item.name)
        document.getElementsByTagName("body")[0].innerHTML+= "<br>" + item.name+"  "+ item.quality + "<br>"
    });

    })
    .catch(function(error : AxiosError){});
    
    
}