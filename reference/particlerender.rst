.. _api_ParticleRender:

ParticleRender Class
====================

Inherited: :doc:`Renderable<api_Renderable>`

.. _api_ParticleRender_description:

Description
-----------

The ParticleRender component allows you to display Particle Effects such as fire and explosions.



.. _api_ParticleRender_public:

Public Methods
--------------

+----------------------------------------------+--------------------------------------------------------------------------+
|  :ref:`ParticleEffect<api_ParticleEffect>` * | :ref:`effect<api_ParticleRender_effect>` () const                        |
+----------------------------------------------+--------------------------------------------------------------------------+
|                                         void | :ref:`setEffect<api_ParticleRender_setEffect>` (ParticleEffect * effect) |
+----------------------------------------------+--------------------------------------------------------------------------+



.. _api_ParticleRender_static:

Static Methods
--------------

None

.. _api_ParticleRender_methods:

Methods Description
-------------------

.. _api_ParticleRender_effect:

 :ref:`ParticleEffect<api_ParticleEffect>`* **ParticleRender::effect** () const

Returns a ParticleEffect assigned to the this component.

**See also** setEffect().

----

.. _api_ParticleRender_setEffect:

 void **ParticleRender::setEffect** (:ref:`ParticleEffect<api_ParticleEffect>` * *effect*)

Assgines a particle *effect* to the this component.

**See also** *effect*().


