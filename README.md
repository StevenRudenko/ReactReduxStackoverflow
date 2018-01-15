ReactReduxStackoverflow
===================
A simple application to demonstrate Redux usage within ReactNative development.

## Project structure
The application contains three main parts:
1. App.js entry point for a ReactNative application. It holds AppNavigation to design screens flow.
2. Actions and reducers are used to simulate login and call StackOverflow API.
3.  Containers are actual screens user interacts with.

## Known issue with ReactNative 0.52.0
At first start you may get error:
```
error: bundling failed: Error: While resolving module `react-native-vector-icons/MaterialIcons`,
the Haste package `react-native-vector-icons` was found. However the module `MaterialIcons` could
not be found within the package. Indeed, none of these files exist:
```

There is an issue at [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/issues/626) with simple workaround. Call shell command from root directory of the project: **`rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json`**. After that you may start application without problem.

## Improvements
1. Extract string resources into the separate class to be able to perform localization easily.
2. Add persistance for offline work.
3. Write tests.

-------------------------------------------------------------------------------

## Developed By

* Steven Rudenko - <steven.rudenko@gmail.com>

## License
```
The MIT License (MIT)

Copyright (c) 2018 Steven Rudenko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
