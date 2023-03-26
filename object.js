let myObjects = {
    title : 'hacking',
    author : 'ThunderBoy',
    description: 'Great power comes with Great Responsibility',
    price : '2999Rs',

    changeprice : function(newPrice){
        this.price = newPrice;

    } 
}

myObjects.changeprice('4999Rs');
console.log(`the course ${myObjects.title} is Provided by ${myObjects.author} for ${myObjects.price} Only`);

myObjects.changeprice();

