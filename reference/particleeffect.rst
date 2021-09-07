.. _api_ParticleEffect:
ParticleEffect Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_ParticleEffect_description:
Description
-----------

Contains all necessary information about the effect.

PartcileEffect alows developer to create or modify a complex particle effects.



.. _api_ParticleEffect_public:
Public Methods
--------------

+-----------------------------------------------+------------------------------------------------------------------------------+
|                                               | :ref:`ParticleEffect<api_ParticleEffect_ParticleEffect>` ()                  |
+-----------------------------------------------+------------------------------------------------------------------------------+
|                                               | :ref:`~ParticleEffect<api_ParticleEffect_~ParticleEffect>` ()                |
+-----------------------------------------------+------------------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`addEmitter<api_ParticleEffect_addEmitter>` (ParticleEmitter * emitter) |
+-----------------------------------------------+------------------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`clear<api_ParticleEffect_clear>` ()                                    |
+-----------------------------------------------+------------------------------------------------------------------------------+
| :ref:`ParticleEmitter<api_ParticleEmitter>` * | :ref:`emitter<api_ParticleEffect_emitter>` (int  index)                      |
+-----------------------------------------------+------------------------------------------------------------------------------+
|                           :ref:`int<api_int>` | :ref:`emittersCount<api_ParticleEffect_emittersCount>` () const              |
+-----------------------------------------------+------------------------------------------------------------------------------+



.. _api_ParticleEffect_static:
Static Methods
--------------

+-------------------------------------------------------------------+-----------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_ParticleEffect_methods>` ()       |
+-------------------------------------------------------------------+-----------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_ParticleEffect_properties>` () |
+-------------------------------------------------------------------+-----------------------------------------------------+

.. _api_ParticleEffect_methods:
Methods Description
-------------------

.. _api_ParticleEffect_ParticleEffect:

**ParticleEffect::ParticleEffect** ()

Default constructs an instance of ParticleEffect.

----

.. _api_ParticleEffect_~ParticleEffect:

**ParticleEffect::~ParticleEffect** ()

Destroys the instance of ParticleEffect. The destructor is virtual.

----

.. _api_ParticleEffect_addEmitter:

:ref:`void<api_void>`  **ParticleEffect::addEmitter** (:ref:`ParticleEmitter<api_ParticleEmitter>` * *emitter*)

Adds an *emitter* to the effect.

----

.. _api_ParticleEffect_clear:

:ref:`void<api_void>`  **ParticleEffect::clear** ()

Removes all emitters from the effect

----

.. _api_ParticleEffect_emitter:

:ref:`ParticleEmitter<api_ParticleEmitter>` * **ParticleEffect::emitter** (:ref:`int<api_int>`  *index*)

Returns an emitter with *index*.

----

.. _api_ParticleEffect_emittersCount:

:ref:`int<api_int>`  **ParticleEffect::emittersCount** () const

Returns a count of the emitters for effect.

----

.. _api_ParticleEffect_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **ParticleEffect::methods** ()

----

.. _api_ParticleEffect_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **ParticleEffect::properties** ()

----


