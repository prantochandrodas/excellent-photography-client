import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const Faq = () => {
    return (
        <div className='my-10 lg:w-[80%] w-[90%] mx-auto'>
            <div data-aos="zoom-in" data-aos-duration="3000">
                <h3 className='lg:text-2xl text-xl text-center mb-4'>FAQ</h3>
                <h2 className='text-xl lg:text-4xl font-semibold text-center mb-4'>Wedding Photography FAQ</h2>
                <p className='lg:px-32 text-xs px-4 text-center lg:text-lg mb-4'>When you are looking for a wedding photographer, it’s obvious that you will have some common questions in your mind. So, here we have covered some of the questions about wedding photography that we often get asked.</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="3000">
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Do You Cover Destination Weddings?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Yes, of course. We are one of the best destination wedding photographers who can accumulate memorable moments of yours for a lifetime.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Are We Able To Print Our Own Photographs?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                All pictures are print ready in high resolution so that you can print them out.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Do You Do Pre Wedding Photography Bangladesh?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Yes, we have a pre wedding shoot photographer on our team who handles the pre wedding events. It can be one or two days of shooting at different places to capture some precious moments of the couple and do some fun stuff to remember forever.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Will You Edit All The Pictures?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Depending on your package, the images will be edited in our own signature style. But some pictures cannot be edited, and these are duplicate shots, test shots, and where people are blinking. Still, if you request any edits, such as swapping heads, removing large items, or any other things like this, then there will be additional charges as per the contract.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;