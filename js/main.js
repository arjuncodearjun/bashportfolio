const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')


about.addEventListener('click', function() {
    const aboutBox = new WinBox({
        title: 'About Me', 
        // background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 90,
        right: 50,
        bottom: 50,
        left: 50,
        // html: '<h1>test<h1>'
        mount: aboutContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        }
    })
})

contact.addEventListener('click', function() {
    const contactBox = new WinBox({
        title: 'Contact Me', 
        // background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 70,
        right: 50,
        bottom: 50,
        left: 150,
        // html: '<h1>test<h1>'
        mount: contactContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        }
    })
})