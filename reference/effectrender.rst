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

+------------------------------------------+---------------------------------------------------------------------+
|  :ref:`VisualEffect<api_VisualEffect>` * | :ref:`effect<api_EffectRender_f207db4e>` () const                   |
+------------------------------------------+---------------------------------------------------------------------+
|                                     void | :ref:`setEffect<api_EffectRender_c4ae1bf9>` (VisualEffect * effect) |
+------------------------------------------+---------------------------------------------------------------------+



.. _api_EffectRender_static:

Static Methods
--------------

None

.. _api_EffectRender_methods:

Methods Description
-------------------

.. _api_EffectRender_f207db4e:

 :ref:`VisualEffect<api_VisualEffect>` * **EffectRender::effect** () const

Returns a ParticleEffect assigned to the this component.

**See also** setEffect().

----

.. _api_EffectRender_c4ae1bf9:

 void **EffectRender::setEffect** (:ref:`VisualEffect<api_VisualEffect>` * *effect*)

Assgines a particle *effect* to the this component.

**See also** *effect*().


