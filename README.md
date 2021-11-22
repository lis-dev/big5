# Big Five personality traits

The project implements a website with a quiz: 120 questions of [The Big Five Test](https://en.wikipedia.org/wiki/Big_Five_personality_traits) and summary.

## Sources
- [Questions](https://github.com/Alheimsins/b5-johnson-120-ipip-neo-pi-r)
- [Result Texts](https://github.com/Alheimsins/b5-result-text)
- [Calculation](https://github.com/Alheimsins/bigfive-calculate-score)

## Database
The application gets data info from https://github.com/lis-dev/big5-data repository. This behavior can be changed via `REACT_APP_QUIZ_SERVER_URL` environment variable

## Localization
All supported languages can be found on https://github.com/lis-dev/big5-data/tree/master/data/result . The default language is `en` (can be changed via `REACT_APP_DEFAULT_LANG` environment variable)

## Stack
- TypeScript
- NodeJs

## Main dependencies
- [React](https://reactjs.org/), [React Create App](https://github.com/facebook/create-react-app)
- [Tailwind](https://tailwindcss.com)
- [Kutty](https://kutty.netlify.app/docs/)
- [Vatio](https://github.com/pmndrs/valtio/)
