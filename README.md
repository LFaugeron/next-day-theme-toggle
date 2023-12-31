<h1 style="text-align: center; color: #48bb37">React Day Theme Toggle</h1>

<h4 style="text-align: center">A beautiful <span style="color: #48bb37">day / night</span> theme toggle with his context for your react application</h4>

<h5>Versions</h5>
<h6>NPM : 9.6.7</h6>

<h5>Dependencies</h5>
<h6>React : 18.2.0</h6>

<hr>

<h2>Installing</h2>
Using npm:

<code style="padding: 10px;">$ npm install -s next-day-theme-toggle</code>

Using yarn:

<code style="padding: 10px;">$ yarn install -s next-day-theme-toggle</code>

<br/>
<hr>

<h2>Working with it</h2>

Use the component DayNightToggle to display a nice toggle in your header or somewhere else.
We will be allowing you to choose different style versions of the toggle in next versions.

Beware to wrap the component in a div, the toggle will take 100% of its parent width.

Also give it those two props : {theme, setTheme}, to make sure that the toggle can change your theme context

```js
import React, {useContext} from 'react';
import DayNightToggle from "react-day-theme-toggle/";
import ThemeContext from "./contexts/ThemeContext"

const Header = () => {
    
    const {theme, setTheme} = useContext(ThemeContext)
    
    return (
        <div>
            <DayNightToggle style={"classic"} theme={theme} setTheme={setTheme}/>
        </div>
    );
};

export default Header;
```

<br/>

<hr>

<h2>Styles</h2>
<br/>

<h5>Default</h5>
<p>use this props : style={"classic"}</p>
<br/>

![image](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/95939653-ea3b-4239-9b35-f24123c12348)
![image](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/9d00bed2-a499-46e4-8f83-bc5ea3bdeaba)
![2023-05-30-14-55-42](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/6af5784d-f2b4-40a7-add4-ed9405102a28)

<br/>
<h5>Desert</h5>
<p>use this props : style={"desert"}</p>
<br/>

![image](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/003b4cfd-52e6-455f-86c6-54d9c808f5b8)
![image](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/c0a0adda-9a6d-46b4-8cc8-4c03dc9c0a4e)
![2023-05-31-11-13-43](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/2215cd96-2bc3-4845-957e-d40d77951555)


<br/>
<h5>Minimalist</h5>
<p>use this props : style={"minimalist"}</p>
<br/>

![image](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/5f649e0a-7242-41a4-9ca3-7e2e7a0111a1)
![image](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/f9be0ee2-6a65-4f15-b2a8-0b9b31a886c4)
![2023-06-01 15-53-13](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/9d235c1c-68a2-41b1-a39c-ea1fa763ca33)

<br/>
<h5>Second Minimalist</h5>
<p>use this props : style={"second_minimalist"}</p>
<br/>

![image](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/1d9ca11d-ba9d-4808-9337-f804bb4aaf67)
![image](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/e174d817-470b-46bd-a4f1-a137385c5d26)
![2023-06-02 10-10-04](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/0e42d6c0-8713-4704-8be6-a4190d4d305f)
