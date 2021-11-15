import React from 'react'

function Newsletter() {
    return (
        <div>
            <form style={{ padding: '6px', textAlign: 'center' }}
                action="https://tinyletter.com/gschincariol" method="post" target="popupwindow"
                onsubmit="window.open('https://tinyletter.com/gschincariol', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
                <p><label htmlFor="tlemail">Email:</label></p>
                <p><input type="text" style={{ width: '250px' }} name="email" id="tlemail" /></p><input type="hidden"
                    defaultValue={1} name="embed" /><input type="submit" defaultValue="Subscribe" className="btn btn-outline-danger" />
                <p ><a href="https://tinyletter.com/gschincariol/archive" target="_blank">letters archive</a></p>
            </form>
        </div>
    )
}

export default Newsletter