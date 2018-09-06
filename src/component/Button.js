import React, { Component } from 'react';

function Button(theme) {
    console.log(theme.theme);
    return <button className={theme.theme}>主题</button>;
}

export default Button;
