.. _doc_vfx_editor:

VFX Editor
==========

Introduction
------------

The VFX editor is a tool designed for creating and editing visual effects (VFX) in the game engine. Using this editor, you can create particle effects, lighting, shadows, animations, and other graphical elements that enhance the visual experience of the game.

This documentation is intended for users who want to learn how to use the VFX editor to create, configure, and optimize visual effects in their games.


Getting Started with the VFX Editor
-----------------------------------

.. image:: media/editor.png
    :alt: VFX Editor
    :width: 800

The editor consists of several key areas:

- **Workspace**: The area where VFX are visualized and edited, allowing you to configure and preview the effect in real time.

- **Parameter Editor**: A panel located next to the workspace, where you can adjust the parameters of each particle modifier. Here, you can configure properties such as particle emission, trajectory, size, speed, and lifetime.

- **Preview Window**: The area where you can preview the effect in real time. The Preview Window updates as you change the parameters, allowing you to immediately see the results.

In the editor, effects are represented as a cascade of particle modifiers, which allow you to fine-tune every aspect of the effect.


Creating a New Effect
---------------------

#. Go to the **Content Browser**.

#. Right-click and select **Visual Effect** from the context menu.

   .. image:: media/context_menu.png
       :alt: Create Effect
	
#. Confirm the creation. The new effect will appear in the **Content Browser** and will be available for further editing.

   .. image:: media/new_effect.png
       :alt: New Effect

Cascade of Particle Modifiers
-----------------------------

An effect consists of a series of modifiers that control different aspects of particle behavior. The cascade of modifiers allows you to configure:

- **Particle Emission**: Set the quantity and frequency of particle generation.

- **Motion Trajectory**: Define the direction and speed of the particles' movement.

- **Particle Lifetime**: Specify how long each particle lasts.

- **Particle Size and Textures**: Configure the appearance, including textures, transparency and other visual properties.

Each modifier can be adjusted using a settings available in the **Parameter Editor**.

Cascade of Particle Modifiers
-----------------------------

An effect consists of a series of modifiers that control different aspects of particle behavior. These modifiers can be divided into three types:

#. **Spawn** - Modifier applied when a new particle is created:

   These modifiers define the initial properties of a particle, such as its position, velocity, and other starting attributes when the particle is spawned.

#. **Update** - Modifier applied to update the particle state every frame:

   These modifiers are responsible for changing the state of the particle over time, affecting its movement, size, color, and other dynamic properties during its lifetime.

#. **Render** - Modifier responsible for rendering the particle:

   These modifiers control how the particle is drawn or rendered, including its appearance, texture, and any other visual characteristics that are applied during its display.

Each modifier can be adjusted using the settings available in the **Parameter Editor**.

Adding Modifiers to the Cascade
-------------------------------

Modifiers in the cascade control various aspects of particle behavior and their interaction with the environment. Properly configuring the modifiers is essential for achieving the desired visual effect.

#. **Adding a Modifier**
   To add a new modifier, click on **Add Modificator** button in **Properties** and seclect one of the available modifier types
   
   .. image:: media/add_modificator.png
       :alt: Add Modificator
	
   Some of available modificators:
   
   - **Add Velocity** – to modify the particle speed.
   
   - **Rotation Rate** – to control the particle rotation angle.
   
   - **Color Scale** – to smoothly change the color of the particles from birth to death.
   
   - **Size Scale** – to modify the size of the particles over time.

#. **Configuring Modifier Parameters**  
   After adding a modifier, you can adjust its parameters in the **Parameter Editor**. Depending on the modifier type, different settings will be available. For example:
   - For the **Velocity** modifier, you can set the speed and direction.
   
   - For **Color Scale**, you can select the initial and final particle colors, as well as the duration of the color change.

#. **Previewing Changes**  
   After adding and configuring the modifiers, you can immediately see the result in the **Preview** window. This will help you assess the impact of each change in real-time and fine-tune the parameters to achieve the desired outcome.

#. **Removing a Modifier**  
   To remove a modifier, click on "X" button in **Properties** window. Removing the modifier will not affect other elements of the effect.
   
   .. image:: media/delete_modificator.png
       :alt: Delete Modificator

By following these steps, you can efficiently add and configure modifiers in the cascade to create complex and realistic visual effects.
