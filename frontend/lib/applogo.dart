import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class CommonLogo extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Image.network("https://play-lh.googleusercontent.com/-HVJ0Nk8pks9-172JJSBsORCJpKd9b2A6E6EcQfVsgQzBQgI5uqsFiy8bGSwscyD_w",width: 100,),
        "To-Do App".text.xl2.italic.make(),
        "Make your day easy".text.light.black.wider.lg.make(),
      ],
    );
  }
}