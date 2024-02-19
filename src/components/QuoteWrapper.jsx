import twitterLogo from '../images/twitter-logo.png';
import tumblr from '../images/tumblr-logo.png';
import '../styles/QuoteWrapper.css';
import quotesData from '../datas/quotes';
import { useState } from 'react';

function QuoteWrapper() {
    
    const dataLength = quotesData.length; 
    
    const [generatedId, setGeneratedId] = useState(1);

    const randomId = () => {
        //event.preventDefault();

        setGeneratedId(Math.floor(Math.random() * dataLength - 1) + 1) ;

    }

    const showedQuote = quotesData[generatedId]; 


    return (
        <section id="quote-wrapper">
            <article className='quote-container'>
                <cite>
                    {showedQuote.text}
                </cite>
                <cite>-{ showedQuote.author }</cite>
            </article>

            
            <article className='social-link'>
                
                <div>
                    {/** Twitter */}
                    <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Either%20write%20something%20worth%20reading%20or%20do%20something%20worth%20writing.%22%20Benjamin%20Franklin">
                        <img
                            width={50}
                            height={50}
                            src={twitterLogo}
                            alt='twitterLogo'
                        />
                    </a>

                    {/** Tumblr */}
                    <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Benjamin%20Franklin&content=Either%20write%20something%20worth%20reading%20or%20do%20something%20worth%20writing.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button">
                        <img
                            width={50}
                            height={50}
                            src={tumblr}
                            alt='tumblrLogo'
                        />
                    </a>
                </div>

                <div>
                    <button onClick={ randomId }>New Quotes</button>
                </div>
            </article>
        </section>
    )
}

export default QuoteWrapper;