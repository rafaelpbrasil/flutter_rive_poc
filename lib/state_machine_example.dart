import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

class StateMachineExample extends StatefulWidget {
  const StateMachineExample({super.key});

  @override
  State<StateMachineExample> createState() => _StateMachineExampleState();
}

class _StateMachineExampleState extends State<StateMachineExample> {
  SMITrigger? _bump;

  void _onInit(Artboard artboard) {
    final controller = StateMachineController.fromArtboard(artboard, 'bumpy');
    artboard.addController(controller!);
    _bump = controller.findInput<bool>('bump') as SMITrigger;
  }

  void _hitBump() => _bump?.fire();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: GestureDetector(
          onTap: _hitBump,
          child: RiveAnimation.network(
            'https://cdn.rive.app/animations/vehicles.riv',
            onInit: _onInit,
          ),
        ),
      ),
    );
  }
}
