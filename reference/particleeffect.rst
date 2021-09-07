.. _api_ParticleEffect:
ParticleEffect Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_ParticleEffect_description:
Description
-----------

PartcileEffect alows developer to create or modify a complex particle effects.



.. _api_ParticleEffect_public:
Public Methods
--------------

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

None

.. _api_ParticleEffect_methods:
Methods Description
-------------------

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


