const ComapnyList = document.getElementById("companyList")

sessionStorage.setItem("Index","2")
sessionStorage.setItem("Company1","Haya Agencies")
sessionStorage.setItem("GST1","32GDTPS1164K1ZZ")
sessionStorage.setItem("Company2","Nestle")
sessionStorage.setItem("GST2","32GKAPM5309A1ZR")


var intindex = parseInt(sessionStorage.getItem("Index"))
for (let index = 1; index <= intindex; index++) {
    const firstdiv = document.createElement("div")
    const secondfirst= document.createElement("div")
    const secondLast= document.createElement("div")
    const Button= document.createElement("button")
    const h4= document.createElement("h4")

    firstdiv.className="Comapynm"
    secondfirst.className="headingCompany"
    secondLast.className="btncompany"

    Button.innerHTML="Open Company"
    h4.innerHTML=sessionStorage.getItem("Company"+index)
    Button.id=sessionStorage.getItem("GST"+index)

    secondfirst.append(h4)
    secondLast.append(Button)

    firstdiv.append(secondfirst)
    firstdiv.append(secondLast)

    ComapnyList.append(firstdiv)

    Button.addEventListener("click", (e)=>{
        Login(e.target.id)
    })

}

function Login(setItem){
    localStorage.setItem("Company", setItem)

    alert("Your gst ="+setItem)

    console.log(window.location)

    window.location.assign(window.location.href.replace("/index.html","/login.html"))
}
