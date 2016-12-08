var app = playground([
    create: function(){
        this.loadImage("ship");
    
    },
    
    ready: function(){
        /*
            ready eveny listener - if you want to do something
            when the loader has finished the job
        */
    
    },
    
    render: function(){
        this.layer.clear("#00088");
        this.layer.drawImage(this.images.ship,0,0)
    }   
]);
