.. _api_ParticleModificator:

ParticleModificator
===================

Inherited: None

.. _api_ParticleModificator_description:

Description
-----------

The ParticleModificator class serves as a base class for particle system modifiers, providing virtual methods for modifying particle data during spawn and update operations. The class also includes methods for loading modification data from a variant list. Users can extend this class to create custom particle modifiers by overriding the virtual methods and providing specific modification behavior.



.. _api_ParticleModificator_public:

Public Methods
--------------

+-------+------------------------------------------------------------------------------------------------+
|  void | :ref:`loadData<api_ParticleModificator_loadData>` (const VariantList & list)                   |
+-------+------------------------------------------------------------------------------------------------+
|  void | :ref:`spawnParticle<api_ParticleModificator_spawnParticle>` (ParticleData & data)              |
+-------+------------------------------------------------------------------------------------------------+
|  void | :ref:`updateParticle<api_ParticleModificator_updateParticle>` (ParticleData & data, float  dt) |
+-------+------------------------------------------------------------------------------------------------+



.. _api_ParticleModificator_static:

Static Methods
--------------

None

.. _api_ParticleModificator_methods:

Methods Description
-------------------

.. _api_ParticleModificator_loadData:

 void **ParticleModificator::loadData** (:ref:`VariantList<api_VariantList>` & *list*)

Loads serialized modification data from a variant *list*.

----

.. _api_ParticleModificator_spawnParticle:

 void **ParticleModificator::spawnParticle** (:ref:`ParticleData<api_ParticleData>` & *data*)

Virtual method for modifying particle *data* during particle spawn.

----

.. _api_ParticleModificator_updateParticle:

 void **ParticleModificator::updateParticle** (:ref:`ParticleData<api_ParticleData>` & *data*, float  *dt*)

Virtual method for modifying particle *data* during each frame update. Parameter *dt* used to pass delta time from Timer.


