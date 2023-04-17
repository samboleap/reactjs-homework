// default export
export default function Gallery(){
    return (
        <section>
            <h1 style={{heading}}>Amazing Students</h1>
           <Profile/>
           <Paragraph/>
           <Profile/>
           <Profile/>
        </section>
    )
}
function Profile(){
    return (
        <section>
            <img src="https://i2.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1"
                style={{image}}            
            ></img>
        </section>
    )
}
function Paragraph(){
    return (
        <section>
            <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
        </section>
    )
}
// object stylesheet 
const heading = {
    textAlign: 'center',
    fontSize: 50
}
const image = {
    width: 10,
    height: 200
}