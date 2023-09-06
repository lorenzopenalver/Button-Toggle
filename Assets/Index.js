class cardTag extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }
    static get observedAttributes() {
        return ['btn', 'h1','p2','p3','p1','p']

    }
    attributeChangedCallback(attr, oldVal, newVal) {
     
        if(attr === 'h1' && oldVal !== newVal){
            this.h1 = newVal
        }
        if (attr === 'p2' && oldVal !== newVal) {
            this.p2 = newVal
        }
        if (attr === 'p3' && oldVal !== newVal) {
            this.p3 = newVal
        }
    
        if (attr === 'p' && oldVal !== newVal) {
            this.p = newVal
        }if (attr === 'p1' && oldVal !== newVal) {
            this.p1 = newVal
        }
        if (attr === 'btn' && oldVal !== newVal) {
            this.btn = newVal
        }
    }
    getTemplate(){
        const template = document.createElement("template")
        template.innerHTML = `
        <section>
        
        <div>
            <p class="suscription-type-text">${this.p}</p>
            <h1>$${this.h1}</h1>
            <p class="details-text">${this.p1}</p>
            <p class="details-text2">${this.p2}</p>
            <p class="details-text">${this.p3}</p>
            <button>${this.btn}</button>
        </div>
        </section>
        ${this.getStyles()}
        `
        return template
    }
    getStyles(){
        return `
       <style>
       :host{
        margin:0;
        padding:0;
        font-size:62.5%;
        --background-color: white;
        --detail-text-color: #737588;
        --price-text-color: #494c5d;
        --button-background: linear-gradient(90deg, rgba(131,136,230,1) 10%, rgba(120,126,232,1) 46%, rgba(99,103,212,1) 100%);
        --border-details-color:  #73758829;
        --button-text-color: white;
        --button-hover-color: rgb(131,136,230);
        --button-hover-background: white;
        --card-height: 380px;
        --card-radius: 7px;
        
       }
       section{
           display: flex;
           justify-content: center;
       }
       div{
        background: var(--background-color);
        border-radius: var(--card-radius);
        width: 90%;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align:center;
        font-family: 'Montserrat', sans-serif;
        box-shadow:-1px 0px 9px -2px rgba(0,0,0,0.75);
        height: var(--card-height);
        
       }
       .suscription-type-text{
        font-size:1.3rem;
        margin-top: 30px;
       }
       h1{
        font-size: 3rem;
        margin-top:10px;
        color:var(--price-text-color);
       }
       p{
        color: var(--detail-text-color);
        font-size: 1rem;
        font-weight: 700;
        margin:0;
       }
       .details-text{
        border-top: var(--border-details-color) 0.5px solid ;
        border-bottom: var(--border-details-color) 0.5px solid ;
        padding-top:10px;
        padding-bottom:10px;
        width: 80%;
        margin: 0 auto;
       }
       .details-text2{
        padding-top:10px;
        padding-bottom:10px;
        width: 80%;
        margin: 0 auto;

       }
       button{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 80%;
        border: none;
        color: var(--button-text-color);
        font-family: 'Montserrat', sans-serif;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 700;
        background: var(--button-background) ;
       }
       button:hover{
        background: var(--button-hover-background);
        color: var(--button-hover-color);
        border: var(--button-hover-color) 0.5px solid;
       }
       @media(min-width: 1000px){
        div{
           width: 300px;
           max-width:300px;
        }
        
        
    }
    }
       </style>
        `

    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
      }
      connectedCallback() {
        this.render();
      }
}
customElements.define("card-tag", cardTag);