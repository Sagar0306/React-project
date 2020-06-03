import React,{Component} from 'react';
import EnlargeImageComponent from './EnlargeImageComponent';
import './Images.css';

class Imagegallery extends Component{
    constructor(props){
        super(props);
        this.state={
            imageUrl:"",
            imageUrlArray:[
                "https://images.unsplash.com/photo-1571217668979-f46db8864f75?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            
                "https://images.unsplash.com/photo-1571210059434-edf0dc48e414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                
              "https://images.unsplash.com/photo-1571030439710-121569126a76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=60",
               "https://images.unsplash.com/photo-1569834381156-7b735e41e57d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                "https://images.unsplash.com/photo-1569493086584-33e0b36f3145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                "https://images.unsplash.com/photo-1569398034126-476b0d96e2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                
              "https://images.unsplash.com/flagged/photo-1569430044663-054ffc0c50c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                "https://images.unsplash.com/photo-1569241786334-1214c0f1f3bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"


            ],
            showModel:false,
            popImageUrl:""
            
        }
    }

    handlePopup= (url)=>{
        this.setState({
            showModel: !this.state.showModel,
            popImageUrl:url
        })
        
    }

    render()
    {
        let imageUrlArray=this.state.imageUrlArray;
        const images=imageUrlArray.map((url,index)=>{
            return(
                <img
                className="gallery"
                src={url}
                key={index}
                onClick={()=>this.handlePopup(url)}
                />
            )
        })

        return (
          <div className="gallery">
          {images}
            {this.state.showModel?(
                <EnlargeImageComponent
                popImageUrl={this.state.popImageUrl}
                closePopup={this.handlePopup}

                />
            ):null}
          
          
           
           
        </div>
        );
    }
}

export default Imagegallery;