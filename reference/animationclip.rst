.. _api_AnimationClip:
AnimationClip Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_AnimationClip_description:
Description
-----------

AnimationClip resource contains keyframe based animation data.

An AnimationClip resource contains keyframe based animation data. The animation data split to a number of tracks that must be connected with the properties of Components. Each track can contain multiple curves or channels like X, Y and Z Which allows them to animate elements independently.



.. _api_AnimationClip_public:
Public Methods
--------------

+---------------------+------------------------------------------------------+
| :ref:`int<api_int>` | :ref:`duration<api_AnimationClip_duration>` () const |
+---------------------+------------------------------------------------------+



.. _api_AnimationClip_static:
Static Methods
--------------

+-------------------------------------------------------------------+----------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_AnimationClip_methods>` ()       |
+-------------------------------------------------------------------+----------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_AnimationClip_properties>` () |
+-------------------------------------------------------------------+----------------------------------------------------+

.. _api_AnimationClip_methods:
Methods Description
-------------------

.. _api_AnimationClip_duration:

:ref:`int<api_int>`  **AnimationClip::duration** () const

Returns duration of the animation clip in milliseconds.

----

.. _api_AnimationClip_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **AnimationClip::methods** ()

----

.. _api_AnimationClip_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **AnimationClip::properties** ()

----


