.. _api_EffectRender:

EffectRender
============

Inherited: None

.. _api_EffectRender_description:

Description
-----------

The ParticleRender component allows you to display Particle Effects such as fire and explosions.



.. _api_EffectRender_public:

Public Methods
--------------

+------------------------------------------+----------------------------------------------------------------------+
|  :ref:`VisualEffect<api_VisualEffect>` * | :ref:`effect<api_EffectRender_effect>` () const                      |
+------------------------------------------+----------------------------------------------------------------------+
|                                     void | :ref:`setEffect<api_EffectRender_setEffect>` (VisualEffect * effect) |
+------------------------------------------+----------------------------------------------------------------------+



.. _api_EffectRender_static:

Static Methods
--------------

None

.. _api_EffectRender_methods:

Methods Description
-------------------

.. _api_EffectRender_effect:

 :ref:`VisualEffect<api_VisualEffect>` * **EffectRender::effect** () const

Returns a ParticleEffect assigned to the this component.

**See also** setEffect().

----

.. _api_EffectRender_setEffect:

 void **EffectRender::setEffect** (:ref:`VisualEffect<api_VisualEffect>` * *effect*)

Assgines a particle *effect* to the this component.

**See also** *effect*().


