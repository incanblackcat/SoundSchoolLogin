import React from "react"
import {Link} from "react-router-dom"

function StudentHome(){ 
    return (
        <html>
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="device-width" initial-scale="1.0"/>
                <title>Sound School Login portal</title>
            </head>

            <body>
                <nav>
                    <ul class="flex pt-2">
                        <li class="flex-1 mr-0.5 text-center block border rounded bg-SoundBlue text-white">Student Info</li>
                        <li class="flex-1 mr-0.5 text-center block border rounded bg-SoundBlue text-white">Student Essay</li>
                        <li class="flex-1 mr-0.5 text-center block border rounded bg-SoundBlue text-white">Student Record Release</li>
                        <li class="flex-1 mr-0.5 text-center block border rounded bg-SoundBlue text-white">Student Agreement Forms</li>   
                        <li class="flex-1 mr-0.5 text-center block border rounded bg-SoundBlue text-white">Resources</li>    
                    </ul>
                </nav>
                
                <div class="static">
                    <div class="relative w-1/2">
                        <div class="absolute left-0">
                            <p>Trying to figure out how wide I need to make this and see what you you youTrying to figure out how wide I need to make this and see what you you youTrying to figure out how wide I need to make this and see what you you you</p>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="absolute right-0">
                            <p>SHMATATS </p>
                        </div>
                    </div>
                    
                </div>
            </body>
       

        </html>
    )        
}

export default StudentHome