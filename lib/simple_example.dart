import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

class SimpleExample extends StatelessWidget {
  const SimpleExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: const Center(
        // child: RiveAnimation.network(
        //   'https://cdn.rive.app/animations/vehicles.riv',
        // ),
        // OR
        child: RiveAnimation.asset(
          'assets/ckl_splash_v2.riv',
        ),
      ),
    );
  }
}
