.. _api_ParticleRender:
ParticleRender Class
================

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_ParticleRender_description:
Description
-----------

Draws a particle effect on the scene.

The ParticleRender component allows you to display Particle Effects such as fire and explosions.



.. _api_ParticleRender_public:
Public Methods
--------------

+---------------------------------------------+--------------------------------------------------------------------------+
|                                             | :ref:`ParticleRender<api_ParticleRender_ParticleRender>` ()              |
+---------------------------------------------+--------------------------------------------------------------------------+
|                                             | :ref:`~ParticleRender<api_ParticleRender_~ParticleRender>` ()            |
+---------------------------------------------+--------------------------------------------------------------------------+
| :ref:`ParticleEffect<api_ParticleEffect>` * | :ref:`effect<api_ParticleRender_effect>` () const                        |
+---------------------------------------------+--------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setEffect<api_ParticleRender_setEffect>` (ParticleEffect * effect) |
+---------------------------------------------+--------------------------------------------------------------------------+



.. _api_ParticleRender_static:
Static Methods
--------------

+-------------------------------------------------------------------+-----------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_ParticleRender_methods>` ()       |
+-------------------------------------------------------------------+-----------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_ParticleRender_properties>` () |
+-------------------------------------------------------------------+-----------------------------------------------------+

.. _api_ParticleRender_methods:
Methods Description
-------------------

.. _api_ParticleRender_ParticleRender:

**ParticleRender::ParticleRender** ()

Default constructs an instance of ParticleRender.

----

.. _api_ParticleRender_~ParticleRender:

**ParticleRender::~ParticleRender** ()

Destroys the instance of ParticleRender. The destructor is virtual.

----

.. _api_ParticleRender_effect:

:ref:`ParticleEffect<api_ParticleEffect>` * **ParticleRender::effect** () const

Returns a ParticleEffect assigned to the this component.

**See also** setEffect().

----

.. _api_ParticleRender_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **ParticleRender::methods** ()

----

.. _api_ParticleRender_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **ParticleRender::properties** ()

----

.. _api_ParticleRender_setEffect:

:ref:`void<api_void>`  **ParticleRender::setEffect** (:ref:`ParticleEffect<api_ParticleEffect>` * *effect*)

Assgines a particle *effect* to the this component.

**See also** *effect*().

----


