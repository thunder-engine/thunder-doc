.. _api_AnimationTrack:
AnimationTrack Class
================

Inherited: None

.. _api_AnimationTrack_description:
Description
-----------



.. _api_AnimationTrack_public:
Public Methods
--------------

+-------------------------------------+-----------------------------------------------------------------------------------+
|                 :ref:`int<api_int>` | :ref:`duration<api_AnimationTrack_duration>` () const                             |
+-------------------------------------+-----------------------------------------------------------------------------------+
|                 :ref:`int<api_int>` | :ref:`hash<api_AnimationTrack_hash>` () const                                     |
+-------------------------------------+-----------------------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`path<api_AnimationTrack_path>` () const                                     |
+-------------------------------------+-----------------------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`property<api_AnimationTrack_property>` () const                             |
+-------------------------------------+-----------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setDuration<api_AnimationTrack_setDuration>` (int  duration)                |
+-------------------------------------+-----------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setPath<api_AnimationTrack_setPath>` (const std::string & path)             |
+-------------------------------------+-----------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setProperty<api_AnimationTrack_setProperty>` (const std::string & property) |
+-------------------------------------+-----------------------------------------------------------------------------------+



.. _api_AnimationTrack_static:
Static Methods
--------------

None

.. _api_AnimationTrack_methods:
Methods Description
-------------------

.. _api_AnimationTrack_duration:

:ref:`int<api_int>`  **AnimationTrack::duration** () const

Returns a duration of track in milliseconds.

**See also** setDuration().

----

.. _api_AnimationTrack_hash:

:ref:`int<api_int>`  **AnimationTrack::hash** () const

Returns a hash of path and name for quick access.

----

.. _api_AnimationTrack_path:

:ref:`std::string<api_std::string>`  **AnimationTrack::path** () const

Returns a path to the object in the hierarchy.

**See also** setPath().

----

.. _api_AnimationTrack_property:

:ref:`std::string<api_std::string>`  **AnimationTrack::property** () const

Returns a property name that will be animated.

**See also** setProperty().

----

.. _api_AnimationTrack_setDuration:

:ref:`void<api_void>`  **AnimationTrack::setDuration** (:ref:`int<api_int>`  *duration*)

Sets a *duration* of track in milliseconds.

**See also** *duration*().

----

.. _api_AnimationTrack_setPath:

:ref:`void<api_void>`  **AnimationTrack::setPath** (:ref:`std::string<api_std::string>` & *path*)

Sets a *path* to the object in the hierarchy.

**See also** *path*().

----

.. _api_AnimationTrack_setProperty:

:ref:`void<api_void>`  **AnimationTrack::setProperty** (:ref:`std::string<api_std::string>` & *property*)

Sets a *property* name that will be animated.

**See also** *property*().

----


