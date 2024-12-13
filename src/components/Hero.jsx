import Markdown from 'markdown-to-jsx';
import { Button } from './Button.jsx';
import { FaExternalLinkAlt } from 'react-icons/fa';

const themeClassMap = {
  imgLeft: 'md:flex-row-reverse',
  imgRight: 'md:flex-row',
};

export const Hero = (props) => {
  return (
    <div className="px-6 py-12 sm:px-12 sm:py-12" data-sb-object-id={props.id}>
      <div
        className={`max-w-full mx-auto flex flex-col gap-12 md:items-center ${
          themeClassMap[props.theme] ?? themeClassMap['imgRight']
        }`}
      >
        <div className="w-full max-w-3xl mx-auto flex-1 text-center">
          <h1 className="mb-6 text-4xl text-gray-950 sm:text-5xl" data-sb-field-path="heading">
            {props.heading}
          </h1>
          {props.body && (
            <div className="mb-6 text-lg text-gray-950" data-sb-field-path="body">
                {props.body}
                {props.inlineActionUrl && props.inlineCallToAction && (
                  <span className="font-bold inline-flex items-center ml-4">
                    <a href={props.inlineActionUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      {props.inlineCallToAction}
                      <FaExternalLinkAlt className="ml-2" />
                    </a>
                  </span>
                )}
            </div>
          )}
          <div className="flex justify-center space-x-4">
            {props.buttonLeft && <Button {...props.buttonLeft} />}
            {props.buttonRight && <Button {...props.buttonRight} />}
          </div>
        </div>
      </div>
    </div>
  );
};